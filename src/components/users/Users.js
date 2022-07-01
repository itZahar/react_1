import {useEffect, useState} from "react";
import {getUsers} from "../services";
import User from "../user/User";

export default function Users({lift}) {

    let [users,setUsers] = useState([])

    useEffect(()=>{
        getUsers()
            .then(({data}) => setUsers([...data]))
    },[])



    return (
        <div>
            {
                users.map((value,index)=> <User
                    item={value}
                    key={index}
                    lift={lift}
                    />
                )
            }
        </div>);
}