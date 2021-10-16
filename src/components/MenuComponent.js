import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
  

    render(){

        const menu = this.props.dishes.map((dish) =>{
    
         return(
            <div className = "container">
          
                <Media tag = "li" className = "mt-5 text-center">
                    <Media left middle>
                        <Media object src = {dish.image}></Media>
                    </Media>
                    <Media body>
                        <Media heading >{dish.name}</Media>
                        <p>{dish.description}</p>
                    </Media>
                </Media>
     
        </div>
         )
        })
    
        return (
    
            <div className="container">
    
                <Media list>
                    {menu}
                </Media>
            </div>
    
        );
    };
    
}



export default Menu;