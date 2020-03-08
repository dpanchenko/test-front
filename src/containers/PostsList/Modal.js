import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'antd';

import PostInfo from '../PostInfo';

class PostModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    visible: false,
    onClose: () => {},
    id: null,
  };

  handleClose = () => {
    const { onClose } = this.props;

    onClose();
  }

  render() {
    const { visible } = this.props;

    return (
      <Modal
        title="Post"
        destroyOnClose
        visible={visible}
        onCancel={this.handleClose}
        footer={[
          <Button key="submit" type="primary" onClick={this.handleClose}>
            Ok
          </Button>,
        ]}
      >
        <PostInfo />
      </Modal>
    );
  }
}

export default PostModal;
