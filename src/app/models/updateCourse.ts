export interface UpdateCourse {
  id: number;
  name: string;
  description: string;
  skill: string;
  startDate: string;
  endDate: string;
  mentorName: string;
  fee: number;
  disabled: number;
  disableStartDate: string;
  disableEndDate: string;
}
