import { configureStore } from "@reduxjs/toolkit";
import BasketReducer from "./components/Features/BasketSlice";
import MenuReducer from "./components/Features/MenuSlice";
export const store = configureStore({
    reducer:{
        Basket: BasketReducer,
        Menu: MenuReducer
    }
})