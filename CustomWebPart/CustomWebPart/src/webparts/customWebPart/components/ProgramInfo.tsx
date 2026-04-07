import * as React from 'react';
import { MockDataService, ProgramInfo as IProgramInfo } from '../services/MockDataService';
import styles from './ProgramInfo.module.scss';

interface IProgramInfoState { programs: IProgramInfo[]; expandedId: string | null; }

export default class ProgramInfo extends React.Component<{}, IProgramInfoState> {
  constructor(props: {}) { super(props); this.state = { programs: [], expandedId: '2' }; }

  public componentDidMount() {
    MockDataService.getProgramInfo().then(programs => this.setState({ programs }));
  }

  private toggle = (id: string) => {
    this.setState(prev => ({ expandedId: prev.expandedId === id ? null : id }));
  };

  public render(): React.ReactElement {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Program Information</h1>
          <p>Learn about available programs and policies</p>
        </div>
        
        <div className={styles.accordionContainer}>
          {this.state.programs.map((prog, i) => {
            const isExpanded = this.state.expandedId === prog.id;
            return (
              <div key={prog.id} className={`${styles.item} ${i !== this.state.programs.length - 1 ? styles.borderBottom : ''}`}>
                <button className={styles.trigger} onClick={() => this.toggle(prog.id)}>
                  <span>{prog.title}</span>
                  <svg className={`${styles.icon} ${isExpanded ? styles.expanded : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {isExpanded && (
                  <div className={styles.content}>
                    <p>{prog.content}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
