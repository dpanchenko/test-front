import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Button, Menu, Popconfirm } from 'antd';

import * as postsActions from '../../redux/posts/actions';
import { selectorLoadingImport } from '../../redux/posts/selectors';

class HeaderControls extends PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
  };

  handleDoImport = () => {
    const { actions } = this.props;

    actions.posts.doImport();
  };

  render() {
    const { loading } = this.props;

    return (
      <Menu mode="horizontal" className="header-menu" selectable={false}>
        <Menu.Item>
          <Popconfirm
            placement="bottomLeft"
            title="Are you sure you wanna start import?"
            onConfirm={this.handleDoImport}
            okText="Yes"
            cancelText="No"
          >
            <Button
              loading={loading}
              disabled={loading}
              type="primary"
            >
              Import
            </Button>
          </Popconfirm>
        </Menu.Item>
      </Menu>
    );
  }
}
// selectorLoadingImport
const mapStateToProps = createStructuredSelector({
  loading: selectorLoadingImport,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    posts: bindActionCreators(postsActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderControls);
