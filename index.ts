interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class Todo1 {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
// let todos: Todo1[]

let todo: Todo = {
  userId: 1,
  id: 1,
  title: "delectus ant fds",
  completed: false,
};
let todos: Todo[] = [
  {
    userId: 1,
    id: 1,
    title: "delectus ant fds",
    completed: false,
  },
  {
    userId: 2,
    id: 2,
    title: "delectus222 ant fds",
    completed: true,
  },
  {
    userId: 3,
    id: 3,
    title: "delectus3333 ant fds",
    completed: false,
  },
];
