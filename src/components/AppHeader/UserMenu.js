import React, { Component, createRef } from 'react';
import DropDown from './DropDown';
import Avatar from './Avatar';
import styles from './UserMenu.module.css';

export default class UserMenu extends Component {
  containerRef = createRef();

  state = {
    isDropDownOpen: false,
  };

  componentDidMount() {
    window.addEventListener('click', this.handleWindowClick);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { isDropDownOpen } = this.state;
    return nextState.isDropDownOpen !== isDropDownOpen;
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.handleWindowClick);
  }

  handleWindowClick = evt => {
    const isTargetInsideContainer = this.containerRef.current.contains(
      evt.target,
    );
    const { isDropDownOpen } = this.state;
    if (isDropDownOpen && !isTargetInsideContainer) {
      this.closeDropDown();
    }
  };

  openDropDown = () => {
    this.setState({ isDropDownOpen: true });
  };

  closeDropDown = () => {
    this.setState({ isDropDownOpen: false });
  };

  render() {
    const { isDropDownOpen } = this.state;
    const { name, avatar } = this.props;
    return (
      <div
        className={styles.container}
        onClick={this.openDropDown}
        ref={this.containerRef}
      >
        <Avatar image={avatar} />
        <span className={styles.name}>{name}</span>
        {isDropDownOpen && <DropDown />}
      </div>
    );
  }
}
