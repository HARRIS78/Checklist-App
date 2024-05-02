import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";

import TodoItems from "./Components/TodoItems";
import { useState } from "react";
import Welcome from "./Components/Welcome";
import { Todoitemcontext } from "./Store/Todoitemcontext";

function App() {
  const initialtodoItems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "4/10/2023",
    },
    {
      name: "Like this video",
      dueDate: "right now",
    },
  ];

  const [todoItems,newitem] = useState(initialtodoItems);



  const handleadd = (itemname,itemdate) =>{
   
    if(itemname.length !== 0 && itemdate.length !== 0)
    {
   
      newitem((current) => {
        const add = [...current,{name : itemname,dueDate:itemdate}];
        return add;
      });
    }
    
    else{
      alert("Enter somethuing");
    }
  }




  const handledelete = (nametodelete) =>{
const newitems = todoItems.filter(item => item.name !== nametodelete) 
newitem(newitems);
  }

  




  return (
    // <Todoitemcontext>

   
    <center className="todo-container">
      <AppName />
      <AddTodo handleadd = {handleadd}/>
      {todoItems.length === 0 && <Welcome></Welcome>}
      
      <TodoItems todoItems={todoItems} handledelete={handledelete}></TodoItems>
   
    </center>
    // {/* </Todoitemcontext> */}
  );
}

export default App;