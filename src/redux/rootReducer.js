
import { combineReducers } from "redux";

import userReducer from "./users/userReducer";
import cartReducer from "./cart/cart.reducer";

const rootReducer = combineReducers({
    user:userReducer,
    hidden:cartReducer,
    cart:cartReducer
})

export default rootReducer;