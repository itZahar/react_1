import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../../services";

const initialState = {
    errors : null,
    carForUpdate:null,
    cars:[]
};

const getAll = createAsyncThunk(
    'carSlice/getAll',
    async (_,{rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        }
        catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)
const updateById = createAsyncThunk(
    'carSlice/updateById',
    async ({id,car},{rejectWithValue})=>{
        try {
            const {data} = await carService.updateById(id,car);
            return {data}
        } catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);

const carSlice = createSlice({
    name : 'carSlice',
    initialState,
    reducers:{
        setCarForUpdate:(state, action)=>{
            state.carForUpdate = action.payload
        }
    },
    extraReducers:(builder) => builder
        .addCase(getAll.fulfilled,(state, action)=>{
            state.errors = null
            state.cars = action.payload
        })
        .addCase(updateById.fulfilled, (state, action) => {
                const currentCar = state.cars.find(car => car.id === action.payload.id);
                Object.assign(currentCar, action.payload);
                state.carForUpdate = null
            }
        )

        .addCase(getAll.rejected,(state, action) => {
            state.errors = action.payload
        })

})
const {reducer:carReducer,actions:{setCarForUpdate}} = carSlice
const carActions = {
    getAll,
    setCarForUpdate,
    updateById
}

export {
    carReducer,
    carActions
}