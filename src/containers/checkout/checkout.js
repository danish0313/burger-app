
import React ,{Component} from 'react';

import classes from './checkout.module.css';
import Checkoutsummary from '../../components/ui/checkoutsummary/checkoutsummary';
import {Route} from 'react-router-dom';
import Contactdata from '../contactdata/contactdata';
import {connect} from 'react-redux';
import * as actionCreator from  '../../store/actioncreator';
class Checkout extends Component {


  // Checkoutsummary cancel button
  removehandler = () => {


this.props.setprice(4);
  this.props.history.goBack();

  }

// checkoutsummary continues button

continuehandler = () => {

this.props.history.replace('/checkout/forum');

}




render(){

return(
<React.Fragment>

  <div className={classes.checkout}>

<Checkoutsummary ingredient={this.props.ingredient} removehandler={this.removehandler} continuehandler={this.continuehandler}/>

<Route path="/checkout/forum"  component= {Contactdata}/>

</div>




</React.Fragment>
)




  }
}


// getting state from reducer

const mapStateToProps = (state) => {


return {

  ingredient :  state.ingr,
  totalprice :  state.price


}
}


const mapPropsToDispatch = (dispatch) => {

return {

 setprice : (price) => dispatch(actionCreator.setprice(price))



}


}





export default connect(mapStateToProps, mapPropsToDispatch)(Checkout);
