import styles from "./Task.module.css";
import { RadioButton, Check, Trash } from "phosphor-react";

interface Props {
  id: string;
  content: string;
  isComplete: boolean;
  onDelete: (content: string) => void;
  checkTodo: (content: string) => void;
}

export function Task({ content, isComplete, onDelete, checkTodo }: Props) {
  function deleteTodo() {
    onDelete(content);
  }
  function checkTodoTask() {
    console.log("aqui");
    checkTodo(content);
  }

  return (
    <div className={styles.task}>
      <header className={styles.header}>
        <div className={styles.tasksNumbers}>
          <span>Tarefas criadas</span>
          <span>5</span>
        </div>
        <div className={styles.tasksNumbers}>
          <span>Concluídas</span>
          <span>5</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.content}>
          <button className={styles.checkButton} onClick={checkTodoTask}>
            {isComplete ? <RadioButton size={16} /> : <Check size={16} />}
          </button>
          <span>{content}</span>
          <button className={styles.trash} onClick={deleteTodo}>
            <Trash size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
