import {Link,Outlet} from "react-router-dom";

export default function LayoutPage() {
    return (
        <div>
        <h3>Branches</h3>
            <ol>
                <li> <Link to={'todos'}>todos</Link> </li>
                <li> <Link to={'albums'}>albums</Link> </li>
                <li> <Link to={'comments'}>comments</Link> </li>
            </ol>
            <Outlet/>

        </div>
    );
}