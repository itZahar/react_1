import React, {Component} from 'react';
import {Comments, Posts} from "./components";


class App extends Component {

    render() {
        return (
            <div>
            <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;