import {useSelector} from "react-redux";
import {Car} from "../Car/Car";

const Cars = () => {

const {cars} = useSelector(state => state.cars)

    return (
        <div>
            {cars.map(car=> <Car car={car} key={car.id}/>)}
        </div>
    )
}
export {
    Cars
}