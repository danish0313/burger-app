import React from 'react';
import classes from './burger.module.css';
import Burgeringredient from '../burgeringredients/burgeringredients';
import {withRouter} from 'react-router-dom';
const Burger = (props) => {


let transformIng = Object.keys(props.ingredient).map((ingkeys) => {

    return [...Array(props.ingredient[ingkeys])].map((_, index) => {


 return  <Burgeringredient key={ingkeys + index} type={ingkeys}/>


 });



}).reduce((prev, current) => {

return  prev.concat(current)


},[]);

if(transformIng.length === 0 ) {


transformIng = <p> plz enter your Burger ingredients</p>


}


  return (

<div className={classes.burger}>
<Burgeringredient type="bread-top"/>
{transformIng}
<Burgeringredient type="bread-bottom"/>

</div>
)

}

export default withRouter(Burger);
