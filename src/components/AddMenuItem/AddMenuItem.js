import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import AddMenuItemForm from './AddMenuItemForm';
import * as API from '../../services/api';

const INITIAL_STATE = {
  name: '',
  description: '',
  category: '',
  image: '',
  price: '',
};

class AddMenuItem extends Component {
  state = { ...INITIAL_STATE, categories: [] };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: [...data] }));
  }

  handleSubmit = event => {
    event.preventDefault();
    const { history } = this.props;
    const { name, description, category, image, price } = this.state;

    const newMenuItem = {
      name,
      description,
      image,
      category,
      price,
    };

    API.addMenuItem({ ...newMenuItem }).then(response => {
      if (response.status !== 201) return;
      history.replace({
        pathname: '/menu',
      });
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const { categories, newMenuItem, category } = this.state;
    return (
      <AddMenuItemForm
        {...newMenuItem}
        category={category}
        options={categories}
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      />
    );
  }
}
export default withRouter(AddMenuItem);
