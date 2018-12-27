import React, { Component } from 'react';
// Components
import MenuGrid from './MenuGrid';
import MenuFilter from './MenuFilter';
import * as API from '../services/menu-api';
import menuList from '../menu.json';

const filterMenu = (filter, menu) =>
  menu.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

export default class MenuPage extends Component {
  state = { menu: menuList, filter: '' };

  componentDidMount() {
    API.getAllMenuItems().then(menu => {
      this.setState({ menu });
    });
  }

  handleDeleteItem = id => {
    API.deleteMenuItem(id).then(isOk => {
      if (!isOk) return;

      this.setState(state => ({
        menu: state.menu.filter(item => item.id !== id),
      }));
    });
  };

  handleShowMoreInfo = id => {
    API.getMenuItemById(id).then(item => {
      console.log(item);
    });
  };

  handleAddMenuItem = () => {
    const item = {
      name: `New name ${Date.now()}`,
      price: Math.random(),
      image:
        'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640',
    };

    API.addMenuItem(item).then(newItem => {
      this.setState(state => ({
        menu: [...state.menu, newItem],
      }));
    });
  };

  handleFilterChange = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { menu, filter } = this.state;

    const filteredMenu = filterMenu(filter, menu);

    return (
      <div>
        <h1>Menu</h1>
        <button type="button" onClick={this.handleAddMenuItem}>
          Add menu item
        </button>
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <MenuGrid
          items={filteredMenu}
          onDelete={this.handleDeleteItem}
          onShowMoreInfo={this.handleShowMoreInfo}
        />
      </div>
    );
  }
}
