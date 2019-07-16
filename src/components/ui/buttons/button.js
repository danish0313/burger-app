import React from 'react';
import classes from './button.module.css';

const Button = (props) => {

  return (
<React.Fragment>

<button className= {[classes.Button , classes[props.btntype]].join(' ') } onClick={props.clicked}>  {props.children}</button>

</React.Fragment>


)

};

export default Button;
