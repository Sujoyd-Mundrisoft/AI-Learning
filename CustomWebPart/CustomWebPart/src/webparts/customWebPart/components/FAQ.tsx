import * as React from 'react';
import { MockDataService, FaqItem } from '../services/MockDataService';
import styles from './FAQ.module.scss'; // Reuse accordion styles from ProgramInfo concept

interface IFAQState { faqs: FaqItem[]; expandedId: string | null; }

export default class FAQ extends React.Component<{}, IFAQState> {
  constructor(props: {}) { super(props); this.state = { faqs: [], expandedId: '2' }; }

  public componentDidMount() {
    MockDataService.getFaqs().then(faqs => this.setState({ faqs }));
  }

  private toggle = (id: string) => {
    this.setState(prev => ({ expandedId: prev.expandedId === id ? null : id }));
  };

  public render(): React.ReactElement {
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Frequently Asked Questions</h1>
          <p>Common questions about the timesheet portal</p>
        </div>
        
        <div className={styles.accordionContainer}>
          {this.state.faqs.map((faq, i) => {
            const isExpanded = this.state.expandedId === faq.id;
            return (
              <div key={faq.id} className={`${styles.item} ${i !== this.state.faqs.length - 1 ? styles.borderBottom : ''}`}>
                <button className={styles.trigger} onClick={() => this.toggle(faq.id)}>
                  <span>{faq.question}</span>
                  <svg className={`${styles.icon} ${isExpanded ? styles.expanded : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>
                {isExpanded && (
                  <div className={styles.content}>
                    <p>{faq.answer}</p>
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
