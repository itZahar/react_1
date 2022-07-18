import {useEffect, useState} from "react";

import {todosServices} from "../../services";
import TodosComponent from "../Todos/TodosComponent";

export default function TodossComponent() {
    let [todoss,setTodos] = useState([])

    useEffect(() =>{
        todosServices().then(({data}) => setTodos(data))
    },[])



    return (
        <div>
            {
                todoss.map(todos=> <TodosComponent todos={todos} key={todos.id}/> )
            }
        </div>
    );
}