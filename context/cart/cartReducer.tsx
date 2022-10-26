import { CartState } from "./"
import { ICartProduct } from "../../interfaces"

type CartActionType = 
| {type: '[Cart] - LoadCart from cookie | storage', payload: ICartProduct[]}
| {type: '[Cart] - Add Product', payload: ICartProduct}

export const cartReducer = (state: CartState, action:CartActionType):CartState => {
    switch(action.type) {
        case '[Cart] - LoadCart from cookie | storage':
            return {
                ...state
            }

            case '[Cart] - Add Product':
                return {
                    ...state,
                    
                }

            default:
                return state
    }
}