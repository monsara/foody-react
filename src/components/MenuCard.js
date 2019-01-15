import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// components
import MenuItem from './MenuItem';
import * as API from '../services/api';

class MenuCard extends Component {
  state = {
    id: null,
    name: null,
    description: null,
    image: null,
    price: null,
    category: null,
    ingredients: null,
  };

  componentDidMount() {
    const { match } = this.props;
    API.getMenuItemById(match.params.id).then(data =>
      this.setState({ ...data }),
    );
  }

  handleGoBack = () => {
    const { state, history } = this.props;
    const { category } = this.state;

    if (state) {
      return history.push(state.from);
    }

    return history.push({
      pathname: '/menu',
      search: `?category=${category}`,
    });
  };

  render() {
    const {
      id,
      name,
      description,
      image,
      price,
      category,
      ingredients,
    } = this.state;

    return (
      <MenuItem
        data={{
          id,
          name,
          description,
          image,
          price,
          category,
          ingredients,
        }}
        goBack={this.handleGoBack}
      />
    );
  }
}

export default withRouter(MenuCard);
