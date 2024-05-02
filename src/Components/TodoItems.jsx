import { useContext } from "react";
import { Todoitemcontext } from "../Store/Todoitemcontext";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";



// const todoitemfromcontext = useContext(Todoitemcontext);

const TodoItems = ({ todoItems,handledelete }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem key = {item.name} todoDate={item.dueDate} todoName={item.name} handledelete={handledelete}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;