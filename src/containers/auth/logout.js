import React, {Component} from 'react'

import {Redirect} from 'react-router-dom';

import {connect} from  'react-redux';

import * as actionCreator from '../../store/actioncreator';
class  Logout extends Component {


componentDidMount() {

this.props.loggingout();
}




  render () {

return(

  <Redirect to='/'/>


)
  }
}

const mapPropsToDispatch = (dispatch) => {


return  {

loggingout : () =>  dispatch(actionCreator.logout())


}


}




export default connect(null,mapPropsToDispatch)(Logout) ;
