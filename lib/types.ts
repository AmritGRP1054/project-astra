export interface ProjectData {
  projectName: string;
  taskNumber: number;
  languages: string[];
  tags: string[];
  expiryDate: string;
  prompt: string;
}

export interface UserDetails {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface AnalyticsData {
  totalTasks: number;
  completedTasks: number;
  pendingTasks: number;
  successRate: number;
}

export interface EarningsData {
  totalEarnings: number;
  pendingPayouts: number;
  lastPayout: {
    amount: number;
    date: string;
  };
}
