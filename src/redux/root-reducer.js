import {persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' //this is local storage(to get the session storage you type sessionStorage from another library)
import {combineReducers} from 'redux'

import cartReducer from './cart/cart.reducer'
import userReducer from './user/user.reducer'
import directoryReducer from './directory/directory.reducer'

const persistConfig={
    key:'root',
    storage,
    whitelist:['cart']//we need only the cart to be stored when refreshing because the use is saved in the firebase
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer,
    directory:directoryReducer
})
export default persistReducer(persistConfig,rootReducer)