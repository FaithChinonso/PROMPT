class TodoType {
  id: string;
  text: string;
  title: string;
  time: string;
  priority: string;
  currentTime: string;
  secondsLeft: number;

  constructor(
    todoText: string,
    todoTitle: string,
    todoTime: string,
    todoPriority: string,
    currentTime: string,
    secondsLeft: number
  ) {
    this.text = todoText;
    this.title = todoTitle;
    this.time = todoTime;
    this.priority = todoPriority;
    this.currentTime = currentTime;
    this.secondsLeft = secondsLeft;
    this.id = new Date().toISOString();
  }
}
export default TodoType;
