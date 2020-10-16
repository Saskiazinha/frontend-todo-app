import React, {useEffect, useState} from 'react';
import axios from "axios";
import AddToDo from "./components/AddToDo";
import AddToDoForm from "./components/AddToDoForm";

function App() {
  const url = "/api/todo";
  const [toDoList, setToDoList] = useState([]);


  useEffect(() => {
      axios.get(url)
          .then(response => response.data)
          .then(data => setToDoList(data))
          .catch(error => console.log(error));
  }, ([], [toDoList]));

    return (
    <div>
        {toDoList.map(item => <div key = {item.id}> {item.description} {item.status}</div>)}
        <div>
          <AddToDoForm/>
        </div>
    </div>
  );
}

export default App;
