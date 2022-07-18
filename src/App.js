import {Route,Routes} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import TodosPage from "./pages/TodosPage";
import AlbumsPage from "./pages/AlbumsPage";
import CommentsPage from "./pages/CommentsPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header/Header";

const App = () => {
    return (
        <div>
            <Header/>
            <div>
                <Routes>
                    <Route path={'/'} element={<HomePage/>}/>
                    <Route path={'/layout'} element={<LayoutPage/>}>
                        <Route path={'todos'} element={<TodosPage/>}/>
                        <Route path={'albums'} element={<AlbumsPage/>}/>
                        <Route path={'comments'} element={<CommentsPage/>}/>
                        <Route path={'comments/:id'} element={<PostPage/>}/>
                    </Route>
                </Routes>
            </div>

        </div>
    );
};

export {App};