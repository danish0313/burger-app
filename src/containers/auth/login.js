import React from 'react';

import classes from './login.module.css';
import {Form , Field, withFormik , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux';
import Button from '../../components/ui/buttons/button';
import * as actionCreator from '../../store/actioncreator';
import {Redirect}  from 'react-router-dom';
class Login extends React.Component {

state = {

change : true


}




componentDidMount(){

if(this.props.purchasing === false  && this.props.authredirect === '/')

this.props.setredirect();


}

// for login form

login = (event) => {

  event.preventDefault();

const email = this.props.values.email;
const password = this.props.values.password;
const issignup = this.state.change;

this.props.auth(email , password , issignup) ;


}


//chagning form

changes =() => {

this.setState( (prevState) => {

return {

change : !prevState.change


}




})





}





  render () {


// for redirectling the login users

let authredirect = null ;


if(this.props.token != null ) {


authredirect = <Redirect to= {this.props.authredirect} />


}









    // for form switching .....

let form = (

<React.Fragment>


   <h2 style={{color: '#703809' , textAlign: 'center'}}> LOGIN FORM! </h2>
  <Form className={classes.form} onSubmit={this.login}>
  {this.props.error === true ? <p> email and password are not correct</p> : null}
       <label><b>Email</b></label>
        <p><ErrorMessage name="email"/></p>
       <Field type="email" placeholder="Enter Email" name="email" required/>

       <label><b>Password</b></label>
        <p><ErrorMessage name="password"/></p>
       <Field type="password" placeholder="Enter Password" name="password" required/>

       <button type="submit" >Login</button>

  </Form>
  </React.Fragment>

)

if (this.state.change === true) {

form =(

<React.Fragment>

<h2 style={{color: '#703809' , textAlign: 'center'}}> SIGNUP FORM! </h2>
<Form className={classes.form} onSubmit={this.login}>
  {this.props.error === true ? <p>email already exist </p>: null}
     <label><b>Email</b></label>
      <p><ErrorMessage name="email"/></p>
     <Field type="email" placeholder="Enter Email" name="email" required/>

     <label><b>Password</b></label>
      <p><ErrorMessage name="password"/></p>
     <Field type="password" placeholder="Enter Password" name="password" required/>

     <button type="submit" >REGISTER</button>
</Form>
</React.Fragment>

)

}



return(

<div>

{authredirect}
  <div className={classes.box}>
{form}

<div className={classes.change}>
<Button btntype="Danger"  clicked={this.changes}> SWITCH TO {this.state.change === true ?  'LOGIN' : 'SIGNUP' }</Button>

</div>
 </div>



</div>


)



  }
}

const Formikapp = withFormik({


 mapPropsToValues(props)  {



return {

email :  props.email || '',
password : props.password || '',





}
},

validationSchema : Yup.object().shape({

email : Yup.string().email().required('* Email is required!'),
password : Yup.string().min(6).required('* password is required!'),


})



})(Login)



const mapStateToProps = (state) => {

return {

loginerror : state.loginerror,

error  :  state.error,
token : state.token,
purchasing : state.purchasing,
authredirect : state.authredirect

}



}




const mapPropsToDispatch = (dispatch) =>{

return{

auth : (email, password , issignup) => dispatch(actionCreator.auth(email , password , issignup)),
setredirect : () => dispatch(actionCreator.authredirect('/'))


}


}






export default connect(mapStateToProps , mapPropsToDispatch)(Formikapp);
