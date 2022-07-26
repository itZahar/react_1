import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
cars:[]
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectedWithValue,dispatch,getState}) => {
        try {
            const {data} = await carService.getAll();
            return data
        }
        catch (e){
            return rejectedWithValue(e.message)
        }
    }
)

const carSlice = createSlice({
    name : 'carSlice',
    initialState,
    reducers:{

    },
    extraReducers:(builder) => builder
        .addCase(getAll.fulfilled,(state, action)=>{
            state.cars = action.payload
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