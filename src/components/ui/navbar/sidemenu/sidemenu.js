import React from 'react';
import classes from './sidemenu.module.css';
import Logos from '../../logo/logo';
import Navigation from '../navigation/navigation';
import Backdoor from '../../backdoor';
import {connect} from 'react-redux';
const Sidemenu = (props) => {

let sidebar = [classes.sidemenu , classes.remove]

if(props.open === true) {

sidebar = [classes.sidemenu , classes.open]


}


  return (

    <React.Fragment>


    <Backdoor cancel sidemenu={props.sidemenu}/>


<div className={sidebar.join(' ')}>
  <Logos logosize='logosize'/>
<Navigation allowed = {props.token} sidemenu ={props.sidemenu} navs="side"/>




</div>


  </React.Fragment>
)

}


const mapStateToProps = (state) => {


return {


token : state.token


}



}


export default connect(mapStateToProps)(Sidemenu) ;
