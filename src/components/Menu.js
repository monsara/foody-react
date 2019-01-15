import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import queryString from 'query-string';
// components
import Filter from './Filter';
import MenuGrid from './MenuGrid';
import * as API from '../services/api';

const getCategoryFromProps = props =>
  queryString.parse(props.location.search).category;

class Menu extends Component {
  state = { menu: [], categories: [] };

  componentDidMount() {
    API.getCategories().then(data => this.setState({ categories: data }));
    API.getAllMenuItems().then(data => this.setState({ menu: data }));

    const category = getCategoryFromProps(this.props);

    if (!category) {
      const { history, location } = this.props;
      return history.replace({
        pathname: location.pathname,
        search: '',
      });
    }
    return API.getMenuItemsWithCategory(category).then(data =>
      this.setState({ menu: data }),
    );
  }

  componentDidUpdate(prevProps) {
    const prevCategory = getCategoryFromProps(prevProps);
    const nextCategory = getCategoryFromProps(this.props);

    if (prevCategory === nextCategory) return;
    API.getMenuItemsWithCategory(nextCategory).then(data =>
      this.setState({ menu: data }),
    );
  }

  handleClearFilter = event => {
    event.preventDefault();
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: '',
    });
  };

  handleCategoryChange = category => {
    const { history, location } = this.props;
    history.push({
      pathname: location.pathname,
      search: `category=${category}`,
    });
  };

  render() {
    const { menu, categories } = this.state;
    const { match, location } = this.props;

    const category = getCategoryFromProps(this.props);

    return (
      <div>
        <Link
          to={{
            pathname: `${match.url}/add`,
            state: { from: location },
          }}
        >
          <p>Add menu item</p>
        </Link>
        <Filter
          categories={categories}
          value={category}
          onChange={this.handleCategoryChange}
          onSubmit={this.handleResetFilter}
        />
        {category && (
          <button type="button" onClick={this.handleClearFilter}>
            Clear
          </button>
        )}
        {category && <p>Your choose now is: {category}</p>}
        <MenuGrid items={menu} {...this.props} />
      </div>
    );
  }
}

export default withRouter(Menu);
