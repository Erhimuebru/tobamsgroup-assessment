import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  Menu:{
    id:null,
    img:null,
    title:null,
    rating:null,
    address:null,
    price:null,
    availability:null,
    discount:null,
    discountPrice:null,
    description:null 
  }
}

export const MenuSlice = createSlice({
  name: 'Menu',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      state.Menu = action.payload
    }
  }
})


// Action creators are generated for each case reducer function
export const  {setMenu  } = MenuSlice.actions

export const selectMenu = (state) => state.Menu.Menu

export const selectBasketItems = (state) => state.Basket.items





  

export default  MenuSlice.reducer