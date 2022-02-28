//tüm stateleri topladığım yer

import { combineReducers } from "redux"; //birleştirme
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    cart :cartReducer
})

export default rootReducer;