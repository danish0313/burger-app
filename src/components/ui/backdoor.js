import React from 'react';
import classes from './backdoor.module.css';


const Backdoor = (props) => {

  return (
<React.Fragment>

{props.cancel  ? <div className={classes.backdoor} onClick={props.sidemenu}></div> : null }


</React.Fragment>


)

};

export default Backdoor;
