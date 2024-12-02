import React, {useEffect} from 'react';
import './App.css';
import {TodoLists} from "./components/todoLists";
import {todoListsAPI} from "./api/api";

function App() {

    //const [todoLists, setTodoLists] = useState()

    useEffect(() => {
        todoListsAPI.postTodoLists('Hi!!!!!!').then( (res)=>{
            console.log(res.data)
        } )
    }, []);

    return (
        <div className="App">
            <TodoLists/>
        </div>
    );
}

export default App;
