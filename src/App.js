import React, {Component} from  'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';
import './App.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES
    }
  }

render(){
  return (
    <div className="App">
   <Navbar dark color = 'primary'>
     <div className = "container">
       <NavbarBrand href = "/">Ristorante Con Fusion</NavbarBrand>
     </div>
     <Nav navbar>
       <NavItem>
         <NavLink href = "www.youtube.com">Youtube</NavLink>
       </NavItem>

       <NavItem>
         <NavLink href = "www.github.com">github</NavLink>
       </NavItem>

       <NavItem>
         <NavLink href = "www.youtube.com">projects</NavLink>
       </NavItem>
       
        </Nav>
   </Navbar>

   <div className = "container-fluid">
     <Menu dishes = {this.state.dishes}/>
   </div>
    </div>
  );
}
}

export default App;
