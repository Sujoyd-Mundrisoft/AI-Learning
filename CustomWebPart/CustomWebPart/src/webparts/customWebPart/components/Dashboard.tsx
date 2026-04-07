import * as React from 'react';
import { MockDataService, DashboardStats, Announcement } from '../services/MockDataService';
import styles from './Dashboard.module.scss';

interface IDashboardProps {
  navigate: (viewName: string) => void;
}

interface IDashboardState {
  stats: DashboardStats | null;
  announcements: Announcement[];
}

export default class Dashboard extends React.Component<IDashboardProps, IDashboardState> {
  constructor(props: IDashboardProps) {
    super(props);
    this.state = { stats: null, announcements: [] };
  }

  public componentDidMount() {
    MockDataService.getDashboardStats().then(stats => this.setState({ stats }));
    MockDataService.getAnnouncements().then(announcements => this.setState({ announcements }));
  }

  public render(): React.ReactElement<IDashboardProps> {
    const { stats, announcements } = this.state;
    const { navigate } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Welcome back, Jane</h1>
          <p>Here's your timesheet overview</p>
        </div>

        {stats && (
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>HOURS THIS WEEK</span>
              <span className={styles.statValue}>{stats.hoursThisWeek}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>PENDING APPROVAL</span>
              <span className={styles.statValue}>{stats.pendingApproval}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>APPROVED WEEKS</span>
              <span className={styles.statValue}>{stats.approvedWeeks}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statLabel}>CURRENT PERIOD</span>
              <span className={styles.statValue}>{stats.currentPeriod}</span>
            </div>
          </div>
        )}

        <div className={styles.sectionCard}>
          <h3>Quick Actions</h3>
          <div className={styles.actionButtons}>
            <button className={styles.primaryButton} onClick={() => navigate('Timesheet')}>
              Enter Time
            </button>
            <button className={styles.secondaryButton} onClick={() => navigate('Audit Log')}>
              View Audit Log
            </button>
            <button className={styles.secondaryButton} onClick={() => navigate('Program Info')}>
              Program Information
            </button>
          </div>
        </div>

        <div className={styles.sectionCard}>
          <h3>Announcements</h3>
          {announcements.map(a => (
            <p key={a.id} className={styles.announcementText}>{a.message}</p>
          ))}
        </div>
      </div>
    );
  }
}
