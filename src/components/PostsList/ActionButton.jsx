import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Button, Tooltip } from 'antd';

class ActionButton extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    disabled: PropTypes.bool,
    htmlType: PropTypes.string,
    onClick: PropTypes.func,
    placement: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    children: null,
    disabled: false,
    htmlType: 'button',
    onClick: () => {},
    placement: 'topRight',
    title: '',
    type: 'primary',
  };

  render() {
    const { children, disabled, htmlType, onClick, placement, title, type } = this.props;

    return (
      <Tooltip title={title} placement={placement}>
        <Button type={type} htmlType={htmlType} onClick={onClick} disabled={disabled}>
          {children || title}
        </Button>
      </Tooltip>
    );
  }
}

export default ActionButton;
