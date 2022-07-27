import {carActions} from "../../redux";
import {useDispatch} from "react-redux";

const Car = ({car}) => {
    const dispatch = useDispatch()

const {id,model,year,price}= car
    return(
        <div className={'block'}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>year:{year}</div>
            <div>price:{price}</div>
            <button onClick={()=>{dispatch(carActions.setCarForUpdate(car))}}>Update</button>
        </div>
    )
}
export {
    Car
}