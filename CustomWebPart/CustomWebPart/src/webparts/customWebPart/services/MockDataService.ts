export interface DashboardStats {
  hoursThisWeek: number;
  pendingApproval: number;
  approvedWeeks: number;
  currentPeriod: string;
}

export interface Announcement {
  id: string;
  message: string;
}

export interface TimesheetEntry {
  id: string;
  category: 'Regular' | 'Sick' | 'PTO' | 'Holiday' | 'Overtime' | 'Unpaid';
  hours: number[]; // Index 0 is Monday, 6 is Sunday
}

export interface TimesheetNote {
  dayIndex: number; // 0 to 4 (Mon to Fri)
  text: string;
}

export interface ProgramInfo {
  id: string;
  title: string;
  content: string;
}

export interface Contact {
  id: string;
  department: string;
  description: string;
  email: string;
  phone: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AuditLog {
  id: string;
  action: string;
  details: string;
  timestamp: string;
}

export class MockDataService {
  public static getDashboardStats(): Promise<DashboardStats> {
    return Promise.resolve({
      hoursThisWeek: 32,
      pendingApproval: 1,
      approvedWeeks: 12,
      currentPeriod: 'Q1 2026'
    });
  }

  public static getAnnouncements(): Promise<Announcement[]> {
    return Promise.resolve([
      { id: '1', message: 'Reminder: Please submit your timesheets by Friday 5:00 PM each week. Late submissions require manager approval.' }
    ]);
  }

  public static getTimesheetEntries(): Promise<TimesheetEntry[]> {
    return Promise.resolve([
      { id: '1', category: 'Regular', hours: [0, 0, 0, 0, 0, 0, 0] },
      { id: '2', category: 'Sick', hours: [0, 0, 0, 0, 0, 0, 0] },
      { id: '3', category: 'PTO', hours: [0, 0, 0, 0, 0, 0, 0] },
      { id: '4', category: 'Holiday', hours: [0, 0, 0, 0, 0, 0, 0] },
      { id: '5', category: 'Overtime', hours: [0, 0, 0, 0, 0, 0, 0] },
      { id: '6', category: 'Unpaid', hours: [0, 0, 0, 0, 0, 0, 0] }
    ]);
  }

  public static getTimesheetNotes(): Promise<TimesheetNote[]> {
    return Promise.resolve([
      { dayIndex: 0, text: '' },
      { dayIndex: 1, text: '' },
      { dayIndex: 2, text: '' },
      { dayIndex: 3, text: '' },
      { dayIndex: 4, text: '' }
    ]);
  }

  public static getProgramInfo(): Promise<ProgramInfo[]> {
    return Promise.resolve([
      { id: '1', title: 'Paid Family Leave', content: 'Details about Paid Family Leave.' },
      { id: '2', title: 'Paid Medical Leave', content: 'Employees can access paid medical leave for their own serious health conditions. Coverage varies by state and program specifics.' },
      { id: '3', title: 'Employee Benefits', content: 'Details about Employee Benefits.' },
      { id: '4', title: 'Overtime Policy', content: 'Details about Overtime Policy.' }
    ]);
  }

  public static getContacts(): Promise<Contact[]> {
    return Promise.resolve([
      { id: '1', department: 'HR Department', description: 'Benefits & Leave', email: 'hr@nayamode.com', phone: '(555) 100-2000' },
      { id: '2', department: 'Payroll Team', description: 'Timesheet & Pay Issues', email: 'payroll@nayamode.com', phone: '(555) 100-2001' },
      { id: '3', department: 'IT Support', description: 'Portal & System Access', email: 'it@nayamode.com', phone: '(555) 100-2002' },
      { id: '4', department: 'Your Manager', description: 'Approvals & Scheduling', email: 'manager@nayamode.com', phone: '(555) 100-2003' }
    ]);
  }

  public static getFaqs(): Promise<FaqItem[]> {
    return Promise.resolve([
      { id: '1', question: 'How do I submit my timesheet?', answer: 'You can submit your timesheet by clicking the Submit button on the Timesheet page.' },
      { id: '2', question: 'What is the deadline for submitting timesheets?', answer: 'Timesheets must be submitted by Friday at 5:00 PM each week. Late submissions require manager approval.' },
      { id: '3', question: 'Can I edit a submitted timesheet?', answer: 'Once submitted, a timesheet is locked unless rejected by a manager.' },
      { id: '4', question: 'What categories are available for time entry?', answer: 'You can enter hours for Regular, Sick, PTO, Holiday, Overtime, and Unpaid.' },
      { id: '5', question: 'Do I need to attach proof for PTO or Overtime?', answer: 'Please attach necessary documents for specific leaves or standard overtime requests.' },
      { id: '6', question: 'Who do I contact for timesheet issues?', answer: 'If you experience system issues, contact IT Support. For pay issues, contact the Payroll Team.' }
    ]);
  }

  public static getAuditLogs(): Promise<AuditLog[]> {
    return Promise.resolve([
      { id: '1', action: 'Timesheet Submitted', details: 'Week of 2026-03-09', timestamp: 'Mar 13, 2026 10:30 PM' },
      { id: '2', action: 'Timesheet Approved', details: 'Week of 2026-03-09 \u2014 approved by Manager', timestamp: 'Mar 14, 2026 4:00 PM' },
      { id: '3', action: 'Timesheet Submitted', details: 'Week of 2026-03-02', timestamp: 'Mar 6, 2026 10:15 PM' },
      { id: '4', action: 'Attachment Uploaded', details: 'PTO approval \u2014 pto_approval.png', timestamp: 'Mar 5, 2026 7:50 PM' },
      { id: '5', action: 'Timesheet Edited', details: 'Week of 2026-02-24 \u2014 corrected Regular hours on Feb 25', timestamp: 'Mar 4, 2026 2:45 PM' }
    ]);
  }
}
