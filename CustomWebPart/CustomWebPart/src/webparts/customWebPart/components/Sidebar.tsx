import * as React from 'react';
import styles from './Sidebar.module.scss';

export interface ISidebarProps {
  currentView: string;
  navigate: (viewName: string) => void;
  userName: string;
}

export default class Sidebar extends React.Component<ISidebarProps> {
  public render(): React.ReactElement<ISidebarProps> {
    const { currentView, navigate, userName } = this.props;

    const navItems = [
      { name: 'Dashboard', icon: 'M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z' },
      { name: 'Timesheet', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' },
      { name: 'Audit Log', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
      { name: 'Program Info', icon: 'M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z' },
      { name: 'Contacts', icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z' },
      { name: 'FAQ', icon: 'M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z' },
    ];

    const getInitials = (name: string) => {
      const parts = name.split(' ');
      if (parts.length > 1) {
        return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
      }
      return name.substring(0, 2).toUpperCase();
    };

    return (
      <aside className={styles.sidebar}>
        <div className={styles.header}>
          <h2>Nayamode</h2>
          <span>Timesheet Portal</span>
        </div>
        
        <nav className={styles.nav}>
          {navItems.map(item => (
            <button 
              key={item.name}
              className={`${styles.navItem} ${currentView === item.name ? styles.active : ''}`}
              onClick={() => navigate(item.name)}
            >
              <svg className={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                <path d={item.icon} />
              </svg>
              {item.name}
            </button>
          ))}
        </nav>

        <div className={styles.profile}>
          <div className={styles.avatar}>{getInitials(userName)}</div>
          <div className={styles.userInfo}>
            <div className={styles.userName}>{userName}</div>
            <div className={styles.userRole}>Employee</div>
          </div>
        </div>
      </aside>
    );
  }
}
