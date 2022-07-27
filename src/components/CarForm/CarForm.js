import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carActions} from "../../redux";

const CarForm = () => {


    const {handleSubmit,reset,register,setValue} = useForm()
    const {carForUpdate,errors} = useSelector(state => state.cars);
    const dispatch = useDispatch();
    useEffect(()=>{
    if (carForUpdate){
        setValue('model',carForUpdate.model)
        setValue('year',carForUpdate.year)
        setValue('price',carForUpdate.price)
    }
},[carForUpdate,setValue])
    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        }
        else {
            await dispatch(carActions.create({car:data}))
        }
        reset()
        };
    let err = document.getElementById('root')
if (errors){
    err.innerHTML = errors
}
    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'model'} {...register('model')}/>
            <input type={"text"} placeholder={'year'} {...register('year')}/>
            <input type={"text"} placeholder={'price'} {...register('price')}/>
            <button type={"submit"}>{carForUpdate? 'Update': 'Create'}</button>

        </form>
    )
}
export {
    CarForm
}