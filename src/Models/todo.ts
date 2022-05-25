class TodoType {
  id: string;
  text: string;
  title: string;
  time: string;
  priority: string;

  constructor(todoText: string, todoTitle: string, todoTime: string, todoPriority: string) {
    this.text = todoText;
    this.title = todoTitle;
    this.time= todoTime;
    this.priority = todoPriority;
    this.id = new Date().toISOString();
  }
}
export default TodoType;
