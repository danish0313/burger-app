import React from 'react';
import classes from './buildcontrols.module.css';
import Buildbutton from './buildbutton';

const controls = [
{label : 'Salad' , type: 'salad' },
{label : 'Bacon' , type: 'bacon' },
{label : 'Cheese' , type: 'cheese'},
{label : 'Meat' , type: 'meat'}

];


const Buildcontrols = (props) => {





return (

<div className={classes.buildcontrols}>

<strong><p> total price : {props.totalprice.toFixed(2) }  $</p> </strong>

 {controls.map( (ctrl) => {

return   <Buildbutton key={ctrl.label}  label ={ctrl.label} type ={ctrl.type}
   incrementhandler={ () => props.incrementhandler(ctrl.type)}
   decrementhandler={() => props.decrementhandler(ctrl.type)}
  disabledinfo={props.disabledinfo}/>


 }) }

 <button className={classes.OrderButton} onClick={props.showmodal} disabled={!props.purchasable}>

    {props.allowed === null ? 'SIGNUP TO ORDER!' :  'ORDER NOW!' } </button>


  </div>


)


}

export default Buildcontrols ;
