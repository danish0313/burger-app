
import * as actionTypes from './actiontypes';


const intitalstate = {
ingr: '',

price : 4,
error: false,
orders: [],
token : null,
userid : null,
loginerror: null,
ordererror: false,
purchasing: false,
authredirect: '/'
};


const ingredient_prices ={
  salad : 0.5,
  cheese: 0.4,
  meat : 1.3,
  bacon: 0.7
};



const reducer = ( state = intitalstate , action) => {



switch (action.type) {


//  ingredient increment button


  case actionTypes.INCREMENT:

return{

...state,
ingr :  {

...state.ingr,
[action.name] : state.ingr[action.name] + 1,
purchasing:true


},
price : state.price + ingredient_prices[action.name]


}



// AFTER CANCELING THE ORDER SETTING PRICE TO 4$
case actionTypes.SETPRICE:

return {

...state,
price : action.price

}



// DECREMENT ingredient button

case actionTypes.DECREMENT:

return{


  ...state,
  ingr :  {

  ...state.ingr,
  [action.name] : state.ingr[action.name] - 1,
  purchasing:true

},

price : state.price - ingredient_prices[action.name]


}



// getting ingredients and storing it


case actionTypes.INGREIDENTS:

return{


  ...state,

  ingr :  {
salad : action.ingredient.salad,
bacon : action.ingredient.bacon,
cheese: action.ingredient.cheese,
meat :  action.ingredient.meat


},
error: false,
purchasing: false,
price : 4


}




 // storing the error
case actionTypes.ERROR:

return{
...state,

error : true


}


//for order storing....

case actionTypes.ORDERS:

return{

...state,

orders : action.orders,
ordererror: false


}

// FOR ORDER ERRORS

case actionTypes.ORDERERROR:

return{
...state,
ordererror  : true

}




// for login or signup

case actionTypes.SIGNUP:

return{
...state,
token :   action.token,
userid : action.userid,
error  : false

}


// FOR LOGINOUT THE user

case actionTypes.LOGOUT:

return{
...state,
token :   null,
userid : null,
error  : false,
ingr  : []

}









//for login errors

case actionTypes.LOGINERROR:

return{
...state,
loginerror : action.loginerror,
error  : true

}



//for rediecting the user to checkout page

case actionTypes.SET_AUTH_REDIRECT:

return{
...state,
authredirect : action.path
}







default: return state;

}

}

export default reducer;
