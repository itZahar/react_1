import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    cars:[],
    errors:null
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
const carSlice = createSlice({
    name:'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>
        builder
            .addCase(getAll.fulfilled,(state, action) => {
                state.cars = action.payload
            })
            .addCase(getAll.rejected,(state,action)=>{
                state.errors = action.payload
            })


})

const {reducer:carReducer} = carSlice

const carActions = {
getAll
}

export {
    carReducer,
    carActions
}