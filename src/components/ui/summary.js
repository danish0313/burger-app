import React from 'react';
import Button from './buttons/button';

const Summary = (props) => {

const orderlist = Object.keys(props.ingredient).map((ings) => {

return <span key={ings}  style={{textTransform : 'capitalize'}}>   <li>  {ings} : {props.ingredient[ings]} </li> </span>



})



  return (
<React.Fragment>


<h3> Your Order!</h3>

<p> A Delious burger with following ingredients !</p>

<ul>

{orderlist}
</ul>

<strong> total price : {props.totalprice.toFixed(2)} $</strong>



<p> check out area !  </p>

<Button btntype="Success" clicked={props.continues}>CHECK OUT! </Button>
<Button btntype="Danger" clicked={props.cancelmodal}> CANCEL! </Button>
</React.Fragment>

)

};

export default Summary;
