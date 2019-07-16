
import React ,{Component} from 'react';

import classes from './orders.module.css';
import Order from '../../components/ui/order/order';
import Spinner from '../../components/ui/spinner/spinner';
import * as actionCreator from  '../../store/actioncreator';

import {connect} from 'react-redux';
class Orders extends Component {


// fetching data from firebase
componentDidMount() {

this.props.fetchorders(this.props.token, this.props.userid);
}



render(){

let spinner = null;
if (this.props.orders.length === 0) {

  spinner =  <Spinner/>

}


const orders = this.props.orders.map( res => {

if (this.props.userid === res.customer.userId) {

return (<Order key={res.id} ingredient={res.ingredient} totalprice={res.totalprice} />)

}

})
return(


<React.Fragment>
<div className={classes.orders}>
<h2> Your Orders !</h2>

{spinner}
{orders}
</div>
</React.Fragment>
)




  }
}


const mapStateToProps = (state) => {

return {

orders : state.orders,
ordererror : state.ordererror,
token : state.token,
userid : state.userid


}



}



const mapPropsToDispatch = (dispatch) => {

return {

fetchorders : (token,userid) => dispatch(actionCreator.fetchorders(token,userid ))


}



}






export default connect(mapStateToProps,mapPropsToDispatch)(Orders);
