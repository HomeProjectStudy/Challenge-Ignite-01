import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Plus } from "phosphor-react";
import styles from "./App.module.css";
import "./global.css";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

export function App() {
  const [newTodoText, setNewTodoText] = useState("");
  const [tasks, setTasks] = useState([
    {
      id: String(Math.floor(Math.random() * 1000)),
      content: "Aqui vai uma tarefa",
      isComplete: false,
    },
  ]);

  function handleNewTodoChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewTodoText(event.target.value);
  }
  function handlerNewTodoInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório");
  }

  function handleAddTodoText(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: String(Math.floor(Math.random() * 1000)),
      content: newTodoText,
      isComplete: false,
    };

    setTasks((oldState) => [...oldState, newTask]);
    setNewTodoText("");
  }

  function handleDeleteTodo(todoText: string) {
    const tasksFilttered = tasks.filter((task) => {
      return task.content !== todoText;
    });
    setTasks(tasksFilttered);
  }

  function checkTodoTask(todoText: string) {
    const taskCompletionChangedList = tasks.map((task) => {
      return task.content === todoText
        ? { ...task, isComplete: !task.isComplete }
        : task;
    });
    setTasks(taskCompletionChangedList);
  }

  return (
    <>
      <Header />
      <div className={styles.containerInput}>
        <textarea
          name="comment"
          placeholder="Adicione uma nova tarefa"
          value={newTodoText}
          onChange={handleNewTodoChange}
          onInvalid={handlerNewTodoInvalid}
        />
        <div className={styles.createdButton}>
          <button onClick={handleAddTodoText}>
            Criar
            <Plus />
          </button>
        </div>
      </div>
      <div className={styles.task}>
        {tasks.map((task) => {
          return (
            <Task
              isComplete={task.isComplete}
              content={task.content}
              id={task.id}
              onDelete={handleDeleteTodo}
              checkTodo={checkTodoTask}
            />
          );
        })}
      </div>
    </>
  );
}
