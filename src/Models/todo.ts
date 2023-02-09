class TodoType {
  id: string;
  text: string;
  title: string;
  time: string;
  priority: string;
  currentTime: string;
  secondsLeft: number;
  isDone: boolean;
  alarm: boolean;

  constructor(
    todoText: string,
    todoTitle: string,
    todoTime: string,
    todoPriority: string,
    currentTime: string,
    secondsLeft: number,
    isDone: boolean,
    alarm: boolean
  ) {
    this.text = todoText;
    this.title = todoTitle;
    this.time = todoTime;
    this.priority = todoPriority;
    this.currentTime = currentTime;
    this.secondsLeft = secondsLeft;
    this.id = new Date().toISOString();
    this.isDone = isDone;
    this.alarm = alarm;
  }
}
export default TodoType;
