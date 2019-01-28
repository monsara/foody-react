import React, { Component } from 'react';
import styles from './Authentication.module.css';

export default class Authentication extends Component {
  state = { activeTabIndex: 0 };

  shouldComponentUpdate(nextProps, nextState) {
    const { activeTabIndex } = this.state;
    return nextState.activeTabIndex !== activeTabIndex;
  }

  handleChangeActiveTabIndex = idx => {
    this.setState({ activeTabIndex: idx });
  };

  render() {
    const { activeTabIndex } = this.state;
    const { items } = this.props;
    const activeTabContent = items[activeTabIndex];

    return (
      <>
        <div>
          {items.map((item, idx) => (
            <button
              className={idx === activeTabIndex ? styles.active : styles.button}
              type="button"
              key={item.type.name}
              onClick={() => this.handleChangeActiveTabIndex(idx)}
            >
              {item.type.name}
            </button>
          ))}
        </div>
        <div>{activeTabContent}</div>
      </>
    );
  }
}
