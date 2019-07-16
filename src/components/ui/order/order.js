import React from 'react';
import classes from './order.module.css';

const Order = (props) => {


const ingredient =[];
for(let names in props.ingredient) {

ingredient.push({
name : names,
amount : props.ingredient[names]

});

};

const allingredients = ingredient.map(res => (<span key={res.name} style={{
  padding: '5px',
  border: '1px solid #ccc',
  display: 'inline-block',
  margin: '15px'
}}>{res.name}  ({res.amount})</span>))

  return (
<React.Fragment>

<div  className={classes.order}>
   <b>ingredients :</b> {allingredients} <br/>
  <b>totalprice</b> : {props.totalprice.toFixed(2)} $

</div>
</React.Fragment>


)

};

export default Order;
