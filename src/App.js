import React , {Component, lazy , Suspense} from 'react';

import Layout from './components/layout';
import Burgerbuilder from './containers/burgerbuilder/burgerbuilder';
 import Checkout from './containers/checkout/checkout';
import {Route , Switch , withRouter , Redirect} from 'react-router-dom';
import Spinner from './components/ui/spinner/spinner';
import {connect} from 'react-redux';
import * as actionCreator from  './store/actioncreator';


const Login = lazy(() => import('./containers/auth/login.js'));

const Logout = lazy(() => import('./containers/auth/logout.js'))
const  Orders = lazy(() => import('./containers/orders/orders'))

class App extends Component {


componentDidMount() {

this.props.forlocalstorage()



}





  render(){

    let route =  (

      <Switch>
        <Route path ="/" exact  component={Burgerbuilder} />
         <Login path = "/login"/>
     <Redirect to = '/' />
         </Switch>
    )

if (this.props.token != null) {

  route =  (

    <Switch>
      <Route path ="/" exact  component={Burgerbuilder} />
       <Route path = "/checkout" component={Checkout}/>
          <Orders path ='/orders' />
       <Logout path ='/logout'/>
        <Login path ='/login'/>



       </Switch> )
}


  return (

      <div>


<Layout>

<Suspense fallback = {<Spinner/>}>
{route }

</Suspense>
</Layout>

      </div>
  )
}
}



const mapStateToProps = (state) => {

return {


token : state.token



}

}



const mapPropsToDispatch = (dispatch) => {


return {

forlocalstorage: () => dispatch(actionCreator.localstorage())



}

}





export default withRouter(connect(mapStateToProps,mapPropsToDispatch)(App));
