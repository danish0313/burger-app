import React from 'react';
import classes from './buildbutton.module.css';

const Buildbutton =(props) => {

return (
  <div className={classes.BuildControl}>

  <div className={classes.Label}> {props.label} </div>

  <button className={classes.Less} onClick= {() => props.decrementhandler(props.type)} disabled={props.disabledinfo[props.type]}>less </button>
  <button className={classes.More}  onClick={() => props.incrementhandler(props.type)}>more </button>



   </div>




)


}

export default Buildbutton;
