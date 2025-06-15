export interface Task {
  id: string;
  title: string;
  description?: string;
  category?: string;
  completed: boolean;
  updatedAt?: number;
}
