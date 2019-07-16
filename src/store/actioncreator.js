
import  * as actionTypes from './actiontypes';

import axios from 'axios';


export const  increment = (ingredientname) => {

return {

type: actionTypes.INCREMENT,

name : ingredientname
}
}


export const  decrement = (ingredientname) => {

return {

type: actionTypes.DECREMENT,

name :  ingredientname



}
}


// getting DATA FROM API
export const getingredients = () => {

return (dispatch) => {

  axios.get('/ingredients.json')
     .then(res => {

dispatch(storeingredients(res.data));


}).catch(error => {

dispatch(showerror());


});


}
}


//showing errors ErrorMessage
export const showerror = () => {

return {

type: actionTypes.ERROR

}
}



// stroing data

export const storeingredients = (ingredient) => {

return  {

type :  actionTypes.INGREIDENTS,

ingredient: ingredient

}
}







// getting ORDERS FROM API
export const fetchorders = (tokens,userIds ) => {


 const token = localStorage.getItem('token')


  const query ='?auth='+ token;
return (dispatch) => {



  axios.get('/orders.json' +query)
  .then(res => {

let data = [];
for (let key in res.data) {

    data.push({
   ...res.data[key],
   id :  key

    }) };

dispatch(storingorders(data));


}).catch( (error) => {
dispatch(ordererror());
});


}


}



// order error function

export const ordererror = () => {


return {

type: actionTypes.ORDERERROR


}





}









//storing orders in state



export const storingorders = (orders) => {

return {
type:  actionTypes.ORDERS,

orders : orders



}

}






// sign up data
export  const signup = (token , userid) => {


return  {
type :  actionTypes.SIGNUP,
token : token,
userid: userid
}
}




// error from firebase
export  const loginerror = (error) => {


return  {
type :  actionTypes.LOGINERROR,

loginerror :  error

}
}


// FOR LOGGING OUT

export const logout = () => {

  localStorage.removeItem('token');

  localStorage.removeItem('expirationTime');
  localStorage.removeItem('localId');


return {

type: actionTypes.LOGOUT



}




}





// SET TIMEOUT FOR LOGGING Route

export const checktime = (expirationTime) => {

return  dispatch  => {

setTimeout( () => {

dispatch(logout());


},expirationTime * 1000)



}


}






//  signup up through firebase

export const auth = (email , password , issignup) => {

return  (dispatch) => {

 const data = {
email : email,
password: password,
returnSecureToken: true

 }

let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyB8_hadS0k_a5eq_WyvqTkPLS8cLBNfHbs';

if (!issignup) {

url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyB8_hadS0k_a5eq_WyvqTkPLS8cLBNfHbs';

}

axios.post(url, data)

.then( res => {


const expirytime =  new Date(new Date().getTime() + res.data.expiresIn * 1000);

localStorage.setItem('token', res.data.idToken);
localStorage.setItem('expirationTime', expirytime);
localStorage.setItem('localId', res.data.localId);
dispatch( signup(res.data.idToken , res.data.localId));

dispatch(checktime(res.data.expiresIn));
dispatch(fetchorders());

}).catch(err => {

  dispatch( loginerror(err.res));


})


}


}

// or localStorage

export const localstorage =() => {

return (dispatch) => {
const token = localStorage.getItem('token')

if(!token) {
dispatch(logout());


}

else {
  const expirationTime = new Date(localStorage.getItem('expirationTime'));

if( expirationTime <= new Date()) {

dispatch(logout());


}
else{

const  userid = localStorage.getItem('localId');

dispatch(signup(expirationTime,userid));
dispatch(checktime((expirationTime.getTime() - new Date().getTime()) / 1000 )) ;

}


}




}

}

// settting the rediect path

export const authredirect = (path) => {

return {

type: actionTypes.SET_AUTH_REDIRECT,
path :  path
}

}


// settng ingredient price to null / 4$

export const setprice = (price) => {

return {

type: actionTypes.SETPRICE,
price : price

}


}
