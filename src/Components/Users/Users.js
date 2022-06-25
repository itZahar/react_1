// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)

import {useEffect, useState} from "react";
import User from "../User/User";
export default function Users() {
    let [users,setUsers] = useState([])
    let[user,setUser] = useState({})
    const selectUser= (item) =>{
        setUser(item)
    }
    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(value => value.json())
                .then(value => {
                    setUsers(value)
                })
        }
        ,[])
    return (
        <div>
            {user.id && <div> {user.id} {user.name}  {user.email} </div>}
            {
                users.map((user,index) => <User
                    item={user}
                    key={index}
                    selectUser={selectUser}
                />)
            }
        </div>
    );
}