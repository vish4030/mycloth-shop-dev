
import { CartActionType } from "./cart.type";

export const toggleCartHidden = () => ({
    type:CartActionType.CART_TOOGLE_HIDDEN
});

 export const addItems = (item) => {
     console.log(item);
     return {
    type:CartActionType.ADD_ITEM,
    payload:item
     }
};