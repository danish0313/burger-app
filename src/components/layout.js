import React, {Component} from 'react';
import classes from './layout.module.css';
import Navbar from './ui/navbar/navbar';
import Sidemenu from './ui/navbar/sidemenu/sidemenu';
import {connect} from 'react-redux';

class Layout extends Component{


state ={

open : false

}


sidemenu = () => {

this.setState((state, props) => {


    return { open: !state.open };
  });

}


render(){

  return (


    <React.Fragment>

<Navbar sidemenu={this.sidemenu} allowed ={this.props.allowed}/>

{this.state.open === false ? null : <Sidemenu open={this.state.open} sidemenu  = {this.sidemenu}/> }

<main className={classes.content}>  { this.props.children }    </main>

  </React.Fragment>
)

}
}


const mapStateToProps = (state) => {


return {

allowed : state.token

}


}




export default connect(mapStateToProps)(Layout);
