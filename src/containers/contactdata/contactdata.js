
import React, {Component} from 'react';
import classes from './contactdata.module.css';
import Button from '../../components/ui/buttons/button';

import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {withFormik ,Field , Form , ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {connect} from 'react-redux'



class Contactdata extends Component {
state = {

  purchasing: false
}




render(){

return(
<React.Fragment>


<div className={classes.contactdata}>

<h3>fill the forum for order!</h3>
 <Form className={classes.form}>
    <p><ErrorMessage name="firstname"/></p>
<label><b>  First Name:</b> </label> <Field type="text" name="firstname" />   <br/>
     <p><ErrorMessage name="lastname"/></p>
<label><b>  Last Name:</b> </label>  <Field type="text" name="lastname" /><br/>
     <p><ErrorMessage name="email"/></p>
<label><b>  Email:</b> &nbsp; &nbsp; &nbsp;&nbsp;&nbsp; </label>  <Field type="email" name="email" />  <br/>
      <p><ErrorMessage name="streetadress"/></p>
<label><b>  Street Adress:</b> </label>  <Field type="text" name="streetadress" />  <br/>
      <p><ErrorMessage name="zipcode"/></p>
<label><b>  Zipcode:</b> </label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <Field type="number" name="zipcode" />  <br/>

<label><b>  Delivery Type:</b> </label>  <Field  component="select" name="delivery">
  <option value="Fast">  Fast </option>
<option value=" Normal">  Normal </option>     </Field> <br/>



<Button  type='submit' disabled={this.props.setSubmitting} btntype='Success'> ORDER! </Button>
</Form>



</div>
</React.Fragment>

)


}


}

const Formikapp = withFormik({

mapPropsToValues(props) {

return {

firstname : props.firstname || '',
lastname  : props.lastname || '',
email    : props.email || '',
streetadress : props.streetadress || '' ,
zipcode :  props.zipcode || '',
delivery : props.delivery || 'Normal',
ingredient: props.ingredient,
totalprice: props.totalprice,
token : props.token,
userid : props.userid


}

},

validationSchema :Yup.object().shape({


firstname :  Yup.string().min(5).required('* firstname is required!'),
lastname  :  Yup.string().min(4).required('* lastname is required!'),
email    :  Yup.string().email().required('* email is required!'),
streetadress : Yup.string().required('* address is required!'),
zipcode  : Yup.number().min(4).required('* zipcode is required!')

}),

handleSubmit(values, {setSubmitting, resetForm}){

  // for token
   const token = values.token;


    const data = {
    ingredient: values.ingredient,
    totalprice:values.totalprice,
    customer: {
    firstname: values.firstname ,
    lastname: values.lastname,
    email   :  values.email,
    streetadress: values.streetadress,
    zipcode: values.zipcode,
    delivery: values.delivery,
    userId :  values.userid
}

      };

    axios.post('/orders.json?auth='+ token, data )
    .then(response => {

alert('your order has been submitted!');


    });

resetForm()


}





})(Contactdata);



// getting state from reducer

const mapStateToProps = (state) => {


return {

  ingredient :  state.ingr,
  totalprice :  state.price,
  token : state.token,
  userid : state.userid

}
}



export default connect(mapStateToProps)(withRouter(Formikapp)) ;
