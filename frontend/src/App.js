import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import { addToDo, getAll, deleteToDo } from "./utils/Api";


function App() {

  const [todo, setToDo] = useState([])
  const [text, setText] = useState("")
 
  useEffect(() => {
     getAll(setToDo)
  }, [])

  return (
    <div className="main">
      <div className="App">
        <div className="container">
          <h1>Your productivity partner </h1>
          <div className="top">
            <input type="text" placeholder="Write your to-dos here..."  value = {text} onChange={(e) => setText(e.target.value )}/>
            <div className="add" onClick={() => addToDo(text, setText, setToDo)}>Add</div>
          </div> 
            <div className="list">
            {todo.map((item) => <ToDo key={item._id} text={item.text} deleteToDo={() => deleteToDo(item._id, setToDo)}/>)}
            </div>
        </div>
      </div>
    </div>
  );
}

export default App;
