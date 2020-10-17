import React, {useEffect, useState} from 'react';
import axios from "axios";
import AddToDoForm from "./components/AddToDoForm";
import deleteItem from "./service/DeleteItem";
import changeStatusOfItem from "./service/changeStatusOfItem";

function App() {
  const url = "/api/todo";
  const [toDoList, setToDoList] = useState([]);
  const [deletedItem, setDeletedItem] = useState(false);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("OPEN");

  useEffect(() => {
      axios.get(url)
          .then(response => response.data)
          .then(data => setToDoList(data))
          .catch(error => console.log(error));
  }, [toDoList, deletedItem]);


    return (
    <div>
        {toDoList.map(item =>
            <div key = {item.id}>
                {item.description} {item.status}
                 <button onClick={() => {changeStatusOfItem(item, setStatus, status)}}>Change status</button>
                 <button onClick={() => {deleteItem(item.id); setDeletedItem(!deletedItem)}}>Delete</button>
            </div>)}
        <div>
          <AddToDoForm
          setStatus={setStatus} setDescription={setDescription} description={description} status={status}
          />
        </div>
    </div>
  );
}

export default App;