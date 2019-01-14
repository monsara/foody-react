import React, { Component, createRef } from 'react';
// components
import Dropdown from './Dropdown/Dropdown';
import Avatar from './Avatar/Avatar';
// styles
import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = { isDropdownOpen: false };

  componentWillMount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropdownOpen } = this.state;

    return nextState.isDropdownOpen !== isDropdownOpen;
  }

  handleWindowClick = e => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      e.target,
    );

    const { isDropdownOpen } = this.state;

    if (isDropdownOpen && !isTargetInsideContainer) {
      this.closeDropdown();
    }
  };

  openDropdown = () => {
    this.setState({ isDropdownOpen: true });
  };

  closeDropdown = () => {
    this.setState({ isDropdownOpen: false });
  };

  render() {
    const { isDropdownOpen } = this.state;
    const { name, avatar } = this.props;

    console.log('RENDER');

    return (
      <div
        className={styles.container}
        onClick={this.openDropdown}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className={styles.name}>{name}</span>
        {isDropdownOpen && <Dropdown />}
      </div>
    );
  }
}
