import React , {Component} from 'react';
import classes from './model.module.css';
import  Backdoor from './backdoor';
import Spinner from './spinner/spinner';
class Modal extends Component {




shouldComponentUpdate (nextProps , nextState){

 if(nextProps.show !== this.props.show ||  nextProps.children !== this.props.children){

     return true;
    }}




render() {


  return (
<React.Fragment>

  <Backdoor cancel={this.props.show} cancelmodel={this.props.cancelmodal}/>

<div className={classes.model} style={{transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
opacity : this.props.show ? '1' : '0'

}}>

{this.props.checkout  ?  <Spinner/> : <div>{this.props.children} </div>}



</div>

</React.Fragment>


)
}

};

export default Modal;
