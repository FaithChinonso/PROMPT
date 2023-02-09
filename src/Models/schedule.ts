class ScheduleType {
  id: string;
  description: string;
  title: string;
  priority: string;

  constructor(
    scheduleDescription: string,
    scheduleTitle: string,
    schedulePriority: string
  ) {
    this.description = scheduleDescription;
    this.title = scheduleTitle;
    this.priority = schedulePriority;
    this.id = new Date().toISOString();
  }
}
export default ScheduleType;
