import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Layout, Typography } from 'antd';

import * as appActions from '../../redux/app/actions';
import {
  selectorLoading,
  selectorLoaded,
  selectorError,
} from '../../redux/app/selectors';

import HeaderControls from './HeaderControls';
import PostsList from '../PostsList';

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    error: PropTypes.bool,
  };

  static defaultProps = {
    loading: false,
    loaded: false,
    error: null,
  };

  componentDidMount() {
    const { actions } = this.props;

    actions.app.load();
  }

  render() {
    const { loading, loaded, error } = this.props;

    if (loading) {
      return null;
    }

    if (error) {
      return <h1>Error</h1>;
    }

    if (!loaded) {
      return null;
    }

    return (
      <Layout className="min-100vh">
        <Layout.Header className="header">
          <Typography.Title level={2}>Posts</Typography.Title>
          <HeaderControls />
        </Layout.Header>
        <Layout.Content>
          <PostsList />
        </Layout.Content>
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  loading: selectorLoading,
  loaded: selectorLoaded,
  error: selectorError,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    app: bindActionCreators(appActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
