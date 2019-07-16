import React from 'react';
import Logo from '../../assets/burger-logo.png';
import classes from './logo.module.css';

const Logos = (props) => {

  return (
<React.Fragment>

<div className={classes[props.logosize]}>

<img src={Logo} alt ="burger"/>

</div>

</React.Fragment>


)

};

export default Logos;
