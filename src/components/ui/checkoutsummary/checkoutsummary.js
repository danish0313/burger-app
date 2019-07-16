import React from 'react';
import classes from './checkoutsummary.module.css';

import Burger from '../../burger/burger';
import Button from '../buttons/button';
import {withRouter} from 'react-router-dom';
const Checkoutsummary = (props) => {



return (
<React.Fragment>
<div className={classes.checkoutsummary}>
<h3> your delicous burger is ready to be ordered !</h3>

  <Burger ingredient={props.ingredient}/>
<Button btntype="Success" clicked={props.continuehandler}>CHECK OUT! </Button>
<Button btntype="Danger" clicked={props.removehandler} > CANCEL! </Button>
 </div>



</React.Fragment>


)
}

export default withRouter(Checkoutsummary);
