import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService} from "../../services";

const initialState = {
    cars:[],
    errors:null,
    carForUpdate:null
};
const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e){
            rejectWithValue(e)
        }
    }
)
const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car},{rejectWithValue})=>{
        try {
            const {data} = await carService.updateById(id,car)
            return data
        }
        catch (e){
            rejectWithValue(e)
        }
    }
)
const create = createAsyncThunk(
    'carSlice/create',
    async ({car},{rejectWithValue})=>{
        try {
            const {data} = await carService.create(car)
            return data
        }
        catch (e){
            rejectWithValue(e)
        }
    }
)
const deleteById = createAsyncThunk(
    'carSlice/deleteById',
    async ({id},{rejectWithValue})=>{
        try {
            await carService.deleteById(id)
            return id
        }
        catch (e){
            rejectWithValue(e)
        }
    }
)

const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state,action)=>{
        state.carForUpdate = action.payload
        }
    },
    extraReducers:(builder)=>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.cars = action.payload
            })
            .addCase(updateById.fulfilled,(state, action) => {
                const currentCar = state.cars.find(car=>car.id === action.payload.id)
                Object.assign(currentCar,action.payload)
                state.carForUpdate = null
            })
            .addCase(create.fulfilled,(state, action)=>{
                state.cars.push(action.payload)
            })
            .addCase(deleteById.fulfilled,(state, action)=>{
                const index = state.cars.findIndex(car=>car.id === action.payload)
                state.cars.splice(index,1)
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.errors = action.payload
            })


})

const {reducer:carReducer,actions:{setCarForUpdate}} = carSlice

const carActions = {
getAll,
    setCarForUpdate,
    updateById,
    create,
    deleteById
}

export {
    carReducer,
    carActions
}