import React, { Component } from 'react';

import Aux1 from '../../hoc/Aux1';
import Bruger from '../../components/Burger/Burger';

class BurgerBuilder extends Component {

  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1
    }
  }

  render() {
    return (
      <Aux1>
        <Bruger ingredients={this.state.ingredients} />
        <div>Build Controls</div>
      </Aux1>
    );
  }
}

export default BurgerBuilder;