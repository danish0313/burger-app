import React from 'react';
import classes from './navbar.module.css';
import Logos from '../logo/logo';

import Navigation from './navigation/navigation';

const Navbar = (props) => {

  return (
<React.Fragment>
<header className={classes.navbar}>
<div className={classes.DrawerToggle} onClick={props.sidemenu}>
<div></div>
<div></div>
<div></div>

</div>

<Logos logosize="logo"/>

<Navigation  navs='navigation' allowed = {props.allowed}/>

</header>




</React.Fragment>


)

};

export default Navbar;
