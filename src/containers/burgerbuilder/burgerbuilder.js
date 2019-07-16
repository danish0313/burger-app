import React, {Component} from 'react';

import Burger from '../../components/burger/burger';

import Buildcontrols from '../../components/buildcontrols/buildcontrols';
import Modal from '../../components/ui/modal';
import Summary from '../../components/ui/summary';
import Spinner from '../../components/ui/spinner/spinner';
import * as actionCreator from  '../../store/actioncreator';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';



class Burgerbuilder extends Component {

state = {

purchasable : false,

purchasing:false,

checkout : false
};



//getting ingredients from firebase
 componentDidMount(){

this.props.getingredients();

   }


//to make the order button disabled or enabled

orderbutton (ingredients) {

const sum = Object.keys(ingredients).map( (ingkey) => {

return  ingredients[ingkey];



}).reduce( (sum , el) => {

return    sum + el ;

},0)



return sum > 0



}



//showing model
showmodal =() => {

if(this.props.token != null) {

this.setState({
purchasing: true

});

} else{
  this.props.setredirect('/checkout');

this.props.history.push('/login');



}



}


// removing model
cancelmodal = () => {


this.setState({
purchasing: false

});

}



// to send the data to the firebase database

continues = () => {

this.props.history.push('/checkout' );


}






render() {
  // this logic is for disabling the button in buildbutton.js

  const disabledinfo = {...this.props.ingredient};

  for(let key in disabledinfo) {

    disabledinfo[key] = disabledinfo[key] <= 0 ;
  }

//showing error on the screen if the firebase does not work

let burger = null;
let error = null;


  if(this.props.error){

error =  <h1 style={{textAlign: 'center'}}>something when wrong !</h1>;

}

if (this.props.error === false){

burger = (
<div>
   <Burger ingredient={this.props.ingredient}/>

<Modal show ={this.state.purchasing}  cancelmodal={this.cancelmodal} checkout ={this.state.checkout}>

   <Summary ingredient= {this.props.ingredient} continues={this.continues}
    cancelmodal={this.cancelmodal} totalprice={this.props.totalprice}/></Modal>
  <Buildcontrols  incrementhandler={this.props.increment} allowed ={this.props.token}
decrementhandler={this.props.decrement} disabledinfo={disabledinfo} totalprice={this.props.totalprice}
purchasable={this.orderbutton(this.props.ingredient)} showmodal={this.showmodal}/>
</div>
);

}


return (

  <React.Fragment>

{this.props.ingredient.length === 0 ?  <Spinner style={{textAlign: 'center' , margin: '0 auto'}}/> : burger }

{error}
</React.Fragment>

)}



};

// getting state from reducer

const mapStateToProps = (state) => {


return {

  ingredient :  state.ingr,
  totalprice :  state.price,
  error      : state.error,
  token      : state.token

}
}


// dispatching to reducer
const mapPropsToDispatch = (dispatch) => {

return {

   increment   : (ingredientname) => dispatch(actionCreator.increment(ingredientname)),
  decrement   : (ingredientname) => dispatch(actionCreator.decrement(ingredientname)),
  getingredients : () => dispatch(actionCreator.getingredients()),
 setredirect  : (path) => dispatch(actionCreator.authredirect(path)),



}


}


export default withRouter(connect(mapStateToProps, mapPropsToDispatch)(Burgerbuilder));
