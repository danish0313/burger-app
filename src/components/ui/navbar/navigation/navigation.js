import React from 'react';
import classes from './navigation.module.css';
import {Link} from 'react-router-dom';
const Navigation = (props) => {

  return (

    <React.Fragment>
<nav className={classes[props.navs]} onClick={props.sidemenu}>

<ul>

<li > <Link to ="/">Burger-Builder </Link></li>
 {props.allowed === null ?  null : <li> <Link to="/orders">Orders </Link></li>}
{props.allowed === null ? <li> <Link to="/login">Register/Login</Link></li> :  <li> <Link to="/logout">Logout</Link></li>}


</ul>
</nav>


  </React.Fragment>
)

}

export default Navigation;
