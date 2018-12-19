import React, { Component } from 'react';
// Components
import MenuGrid from './MenuGrid';
import MenuFilter from './MenuFilter';
import menuList from '../menu.json';

const filterMenu = (filter, menu) =>
  menu.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

export default class MenuPage extends Component {
  state = {
    menu: menuList,
    filter: '',
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const { menu, filter } = this.state;

    const filteredMenu = filterMenu(filter, menu);

    return (
      <div>
        <h1>Menu</h1>
        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <MenuGrid items={filteredMenu} />
      </div>
    );
  }
}
