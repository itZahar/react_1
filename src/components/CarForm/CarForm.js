import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import './CarForm.css'
import {carActions} from "../../redux";

const CarForm = () => {
    const dispatch =useDispatch()
    const {reset,register,handleSubmit,setValue} = useForm()
    const {carForUpdate,errors} = useSelector(state => state.cars)

    useEffect(()=>{
        if (carForUpdate){
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    },[carForUpdate,setValue])
    const submit = async (data) => {
        if (carForUpdate) {
            await dispatch(carActions.updateById({id: carForUpdate.id, car: data}))
        }
        else await dispatch(carActions.create({car:data}))
        reset()
    }
if (typeof errors === 'string'){
    document.getElementById('root').innerHTML = errors
}

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type={"text"} placeholder={'model'}{...register('model')}/>
            <input type={"text"} placeholder={'price'}{...register('price')}/>
            <input type={"text"} placeholder={'year'}{...register('year')}/>
            <button type={'submit'}>{carForUpdate? 'Update':'Create'}</button>
            {errors && typeof errors === 'object' && <div className={'errors'}>
                <div>Model:{errors.model}</div>
                <div>Price:{errors.price}</div>
                <div>Year:{errors.year}</div>
            </div>}


        </form>
    )
}

export {
    CarForm
}