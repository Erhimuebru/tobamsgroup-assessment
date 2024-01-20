// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   items: [],
// }

// export const BasketSlice = createSlice({
//   name: 'Basket',
//   initialState,
//   reducers: {
//     addToBasket: (state, action) => {
//         const { id, name, title, price } = action.payload;
  
//         // Check if the item is already in the basket
//         const existingItem = state.items.find((item) => item.id === id);
  
//         if (existingItem) {
//           // If the item is in the basket, update its quantity
//           existingItem.quantity += 1;
//         } else {
//           // If the item is not in the basket, add it with quantity 1
//           state.items.push({ id, name, title, price, quantity: 1 });
//         }
//       },

//     removeFromBasket: (state, action) => {
//         let newBasket = [...state.items];
//         const index = state.items.findIndex((item) => item.id === action.payload.id);
  
//         if (index !== -1) {
//           newBasket.splice(index, 1);
//           state.items = newBasket;
//         } else {
//          console.warn('u can no remove');
//         }
//         state.items = newBasket
//          },
//        },
//      })
     

// // Action creators are generated for each case reducer function
// export const  {addToBasket,removeFromBasket,  } = BasketSlice.actions

// export const selectBasketItems = (state) => state.Basket.items



// export const selectBasketTotal =(state)=> state.Basket.items.reduce((total,item)=>total+=item.price,0)

  

// export default  BasketSlice.reducer



// BasketSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const BasketSlice = createSlice({
  name: 'Basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { id, name, title, price,img } = action.payload;

      // Check if the item is already in the basket
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // If the item is in the basket, update its quantity
        existingItem.quantity += 1;
      } else {
        // If the item is not in the basket, add it with quantity 1
        state.items.push({ id, name,img, title, price, quantity: 1 });
      }
    },

    removeFromBasket: (state, action) => {
      const { id } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        // If the item is in the basket and its quantity is more than 1, reduce the quantity
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // If the item quantity is 1, remove it from the basket
          state.items = state.items.filter((item) => item.id !== id);
        }
      } else {
        console.warn('Item not found in the basket.');
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket } = BasketSlice.actions;

export const selectBasketItems = (state) => state.Basket.items;

export const selectBasketTotal = (state) =>
  state.Basket.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default BasketSlice.reducer;
