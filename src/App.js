//Отримати всіх користувачів з jsonplaceholder, вивести їх.
// Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
// Запити робити через axios, організація коду через сервіси
import Users from "./components/users/Users";
import {getUsersPosts} from "./components/services";
import {useState} from "react";
import './app.css'
import Posts from "./components/posts/Posts";

export default function App() {
    let [posts,setPosts] = useState([])
    const lift = (id) => {
        getUsersPosts(id).then(({data}) => {
            setPosts([...data])
        } )
    }
    return (
        <div className={'father'}>
        <div className={'left'}> <Users lift={lift}/></div>
            <div className={'right'}>
                <Posts
                posts={posts}
                />
            </div>
        </div>
    );
}
