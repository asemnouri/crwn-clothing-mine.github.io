//reslect is a memoization method that enables you not to rerender 
//the project each and every time if the state does not change 
import {createSelector} from 'reselect'

//it consists of two thing 
//the input selector(does not use create selector)
//GOES TO THE ROOT REDUCER
const selectCart = state=>state.cart


//output selector is the one that i export 
//takes an input selector or an output selector as parameter 
//can take many parameters but the last one is a function(the function gets the returned value from the firrst parameters)
//GOES TO THE CART REDUCER
export const selectCartItems=createSelector(
    [selectCart],
    (cart)=> cart.cartItems
)
 //state.cart.cartItems

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
  );
  //state.cart.hidden


//we use many selectors so that we can take the one that we need
export const selectCartItemCount = createSelector (
    [selectCartItems],  // mesh shart ykon awwal input 3adi mmken mn eshe tani 3ashenno bedde bas cartitem
    (cartItem) =>
        cartItem.reduce(
            (acc, cartItem) =>
                acc + cartItem.quantity,
            0
        )
)

//to calculate the total price in the cart
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems =>
      cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
          accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
      )
  );

