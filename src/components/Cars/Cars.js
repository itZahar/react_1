import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Car} from "../Car/Car";
import {carActions} from "../../redux";

const Cars = () => {
    const {cars} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(carActions.getAll())
    },[dispatch]);

    return(
        <div>
            {
                cars.map(car=><Car car={car} key={car.id} />)
            }
        </div>
    )
}

export {
    Cars
}