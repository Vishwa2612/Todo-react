import { useState } from "react"
import ToDoList from "./ToDoItem";

const App = () => {
  const [tasks,setTasks] = useState([]);
  const [currentTask,setCurrentTask]= useState("");
  const removeTaskWithIndex = (index)=>{
    setTasks((currentValue)=>{
      const updateArray = currentValue.filter((e,i)=>{
        if(i===index){
          return false;
        }
        return true;
      });
      return updateArray;
    })
  }
  const handleButtonClick = ()=>{
    // setTasks([...tasks,currentTask])
    setTasks((currentValue)=>{
      currentValue.push(currentTask)
      return currentValue
    });
    setCurrentTask("");
  };


  
  return (
    <main className="text-center">
      <h1 className="text-gray-700 text-4xl font-bold py-10">My To-Do List</h1>
      <div>
        <input
          type="text"
          value={currentTask}
          onChange={(e)=>{
            setCurrentTask(e.target.value);
          }}
          placeholder="Add a new task"
          className="p-6 w-[70%] border border-gray-800"
        />
        <button
        onClick={handleButtonClick}
          className="bg-gray-700 text-white p-3 rounded-md ml-6"
        >
          Add
        </button>
      </div>
      <ol id="taskList" className="space-y-3 p-6 max-w-lg mx-auto">
        {tasks.map((currentTask,index)=>{
          return (
          <ToDoList 
          todo={currentTask} 
          removeTaskWithIndex={removeTaskWithIndex} 
          index={index} 
          key={index} 
          />)
          {/* return <li key={index}>{currentTask}</li> */}
        
        })}
      </ol>
    </main>
  )
}

export default App



// useEffect(()=>{
//   console.log("Triggerd");
// },[currentTask])