import * as React from 'react';
import styles from './CustomWebPart.module.scss';
import type { ICustomWebPartProps } from './ICustomWebPartProps';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Timesheet from './Timesheet';
import AuditLog from './AuditLog';
import ProgramInfo from './ProgramInfo';
import Contacts from './Contacts';
import FAQ from './FAQ';

export default class CustomWebPart extends React.Component<ICustomWebPartProps, { currentView: string }> {
  constructor(props: ICustomWebPartProps) {
    super(props);
    this.state = {
      currentView: 'Dashboard'
    };
  }

  private handleNavigation = (viewName: string) => {
    this.setState({ currentView: viewName });
  };

  public render(): React.ReactElement<ICustomWebPartProps> {
    const { currentView } = this.state;
    // userDisplayName comes from props
    const { userDisplayName } = this.props;

    let viewComponent;
    switch (currentView) {
      case 'Dashboard':
        viewComponent = <Dashboard navigate={this.handleNavigation} />;
        break;
      case 'Timesheet':
        viewComponent = <Timesheet />;
        break;
      case 'Audit Log':
        viewComponent = <AuditLog />;
        break;
      case 'Program Info':
        viewComponent = <ProgramInfo />;
        break;
      case 'Contacts':
        viewComponent = <Contacts />;
        break;
      case 'FAQ':
        viewComponent = <FAQ />;
        break;
      default:
        viewComponent = <Dashboard navigate={this.handleNavigation} />;
    }

    return (
      <section className={styles.appShell}>
        <Sidebar 
          currentView={currentView} 
          navigate={this.handleNavigation} 
          userName={userDisplayName || 'Jane Doe'} 
        />
        <main className={styles.mainContent}>
          {viewComponent}
        </main>
      </section>
    );
  }
}
