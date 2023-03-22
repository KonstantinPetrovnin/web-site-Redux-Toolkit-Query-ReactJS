import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "../../components/constants/constants";
import {shuffle} from '../../utils/common/common'


export const getProducts = createAsyncThunk(
    'products/getProducts',
    async(_,thunkAPI) =>{
        try{
            const res = await axios(`${BASE_URL}/products`)
            return res.data
        }catch(err){
            console.log(err)
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const productsSlice = createSlice({
    name:'products',
    initialState:{
        list:[],
        isLoading:false,
        filtred:[],
        related:[]
    },
    reducers:{
        filterByPrice:(state,{payload}) =>{
            state.filtred = state.list.filter(({price})=> price < payload)
            console.log(`Filtred : ${state.filtred }` )
   
        },
        getRelatedProducts: (state, { payload }) => {
            const list = state.list.filter(({ category: { id } }) => id === payload);
            state.related = shuffle(list);
          },
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state)=>{
            state.isLoading = true
        })
        builder.addCase(getProducts.fulfilled,(state,{payload}) =>{
            state.isLoading = false
            state.list = payload
        })
        builder.addCase(getProducts.rejected,(state)=>{
            state.isLoading = false
        })
    }

})
export const {filterByPrice,getRelatedProducts} = productsSlice.actions
export default productsSlice.reducer