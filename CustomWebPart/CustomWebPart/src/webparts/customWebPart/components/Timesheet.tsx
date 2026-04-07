import * as React from 'react';
import { MockDataService, TimesheetEntry, TimesheetNote } from '../services/MockDataService';
import styles from './Timesheet.module.scss';

interface ITimesheetState {
  entries: TimesheetEntry[];
  notes: TimesheetNote[];
}

export default class Timesheet extends React.Component<{}, ITimesheetState> {
  constructor(props: {}) {
    super(props);
    this.state = { entries: [], notes: [] };
  }

  public componentDidMount() {
    MockDataService.getTimesheetEntries().then(entries => this.setState({ entries }));
    MockDataService.getTimesheetNotes().then(notes => this.setState({ notes }));
  }

  private handleHoursChange = (entryId: string, dayIndex: number, value: string) => {
    const hours = parseFloat(value) || 0;
    this.setState(prevState => ({
      entries: prevState.entries.map(entry => {
        if (entry.id === entryId) {
          const newHours = [...entry.hours];
          newHours[dayIndex] = hours;
          return { ...entry, hours: newHours };
        }
        return entry;
      })
    }));
  };

  public render(): React.ReactElement {
    const { entries, notes } = this.state;
    const days = ['Mon Apr 6', 'Tue Apr 7', 'Wed Apr 8', 'Thu Apr 9', 'Fri Apr 10', 'Sat Apr 11', 'Sun Apr 12'];
    
    // Calculate totals
    const dailyTotals = [0, 0, 0, 0, 0, 0, 0];
    let weeklyTotal = 0;
    
    entries.forEach(entry => {
      entry.hours.forEach((h, i) => {
        dailyTotals[i] += h;
        weeklyTotal += h;
      });
    });

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h1>Timesheet</h1>
            <p>Enter your daily hours by category</p>
          </div>
          <div className={styles.actions}>
            <span className={styles.badge}>Draft</span>
            <button className={styles.submitBtn}>Submit Week</button>
          </div>
        </div>

        <div className={styles.dateNavigator}>
          <button>&lt;</button>
          <span>Week of April 6, 2026</span>
          <button>&gt;</button>
        </div>

        <div className={styles.tableCard}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Category</th>
                {days.map((day, i) => (
                  <th key={i}>
                    <div className={styles.dayName}>{day.split(' ')[0]}</div>
                    <div className={styles.dayDate}>{day.split(' ').slice(1).join(' ')}</div>
                  </th>
                ))}
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {entries.map(entry => {
                 const rowTotal = entry.hours.reduce((a, b) => a + b, 0);
                 return (
                   <tr key={entry.id}>
                     <td>
                       <span className={`${styles.categoryLabel} ${styles[entry.category.toLowerCase()]}`}>
                         {entry.category}
                       </span>
                     </td>
                     {entry.hours.map((h, i) => (
                       <td key={i}>
                         <input 
                           type="number" 
                           min="0" 
                           max="24"
                           value={h || ''} 
                           placeholder="0"
                           onChange={(e) => this.handleHoursChange(entry.id, i, e.target.value)} 
                           className={styles.hourInput}
                         />
                       </td>
                     ))}
                     <td className={styles.rowTotal}>{rowTotal}</td>
                   </tr>
                 );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td>Total</td>
                {dailyTotals.map((tot, i) => (
                  <td key={i}>{tot}</td>
                ))}
                <td className={styles.grandTotal}>{weeklyTotal}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className={styles.notesCard}>
          <h3>Daily Notes</h3>
          <div className={styles.notesGrid}>
            {notes.map(note => (
              <div key={note.dayIndex} className={styles.noteField}>
                <label>{days[note.dayIndex]}</label>
                <textarea placeholder="Add notes..." value={note.text} readOnly />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
