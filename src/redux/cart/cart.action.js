
import { CartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
    type:CartActionType.CART_TOOGLE_HIDDEN
});

 export const addItems = (item) => ({
    type:CartActionType.ADD_ITEM,
    payload:item
});

export const removeItem = (item) => ({
    type:CartActionType.REMOVE_ITEM,
    payload:item
});


export const clearCartItem = (item) => ({ 
    type:CartActionType.CART_ITEM_REMOVE,
    payload:item
});