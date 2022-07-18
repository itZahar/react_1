import {Link} from "react-router-dom";

export default function Header() {
    return (
        <div>
            <h2>Menu</h2>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'/Layout'}>Layout</Link></li>
            </ul>
        </div>
    );
}