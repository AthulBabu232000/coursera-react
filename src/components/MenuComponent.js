import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null,
    };
  }

  onDishSelect(dish) {
    this.setState({
      selectedDish: dish,
    });
  }


  renderDish(dish){
        if(dish != null){
         return(
            <Card className="m-1 col-md-12">
            <CardImg width="100%" src={dish.image} alt={dish.name} />
  
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            <CardBody><CardText>{dish.description}</CardText></CardBody>
          </Card>
         )

        }else{
            return(
                <div></div>
            )
        }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <Card className="m-1 col-md-2" onClick={() => this.onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />

          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      );
    });

    return (
      <div className="container mt-5 bg-secondary">
        <div className="row">{menu}</div>
        <div className="container">{this.renderDish(this.state.selectedDish)}</div>
      </div>
    );
  }
}

export default Menu;
