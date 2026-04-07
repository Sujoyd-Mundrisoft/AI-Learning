import * as React from 'react';
import { MockDataService, AuditLog as IAuditLog } from '../services/MockDataService';
import styles from './AuditLog.module.scss';

interface IAuditLogState { logs: IAuditLog[]; }

export default class AuditLog extends React.Component<{}, IAuditLogState> {
  constructor(props: {}) { super(props); this.state = { logs: [] }; }

  public componentDidMount() {
    MockDataService.getAuditLogs().then(logs => this.setState({ logs }));
  }

  public render(): React.ReactElement {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Audit Log</h1>
          <p>Track all timesheet actions and changes</p>
        </div>
        
        <div className={styles.listCard}>
          {this.state.logs.map((log, i) => (
            <div key={log.id} className={`${styles.logItem} ${i !== this.state.logs.length - 1 ? styles.borderBottom : ''}`}>
              <div className={styles.iconWrapper}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"/>
                </svg>
              </div>
              <div className={styles.content}>
                <div className={styles.action}>{log.action}</div>
                <div className={styles.details}>{log.details}</div>
              </div>
              <div className={styles.timestamp}>
                {log.timestamp.split(' ').slice(0,3).join(' ')}<br/>
                {log.timestamp.split(' ').slice(3).join(' ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
