import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Layout } from 'antd';
import { push } from 'connected-react-router';

import * as postsSelectors from '../../redux/posts/selectors';
import * as postsActions from '../../redux/posts/actions';

import ListTable from './Table';
import PostModal from './Modal';

class PostsLists extends PureComponent {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    total: PropTypes.number,
    items: PropTypes.array,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    total: 0,
    items: [],
    loading: false,
  };

  state = {
    showModal: false,
  };

  componentDidMount() {
    this.fetchItems();
  }

  fetchItems = (page) => {
    const { actions } = this.props;

    actions.posts.getList(page);
  }

  handleClickItem = (item) => {
    const { actions } = this.props;

    this.setState({ showModal: true });
    // actions.redirect(`auctions/${item.id}`);
  };

  handleCloseModal = () => this.setState({ showModal: false });

  handleChangeTable = (page) => {
    this.fetchItems(page);
  }

  render() {
    const { items, loading, total } = this.props;
    const { showModal } = this.state;

    return (
      <Layout className="tableLayout">
        <ListTable
          loading={loading}
          total={total}
          items={items}
          onChange={this.handleChangeTable}
          onClick={this.handleClickItem}
        />

        <PostModal visible={showModal} onClose={this.handleCloseModal} />
      </Layout>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  items: postsSelectors.selectorItems,
  loading: postsSelectors.selectorLoadingList,
  total: postsSelectors.selectorCount,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    posts: bindActionCreators(postsActions, dispatch),
    redirect: (payload) => dispatch(push(payload)),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsLists);
