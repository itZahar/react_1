import {CarForm, Cars} from "./components";

const App = () => {

    return (
        <div>
        <CarForm/>
            <hr/>
        <Cars/>
            <div id={'root'}></div>
        </div>
    );
}
export {
    App
}