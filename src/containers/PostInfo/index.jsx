import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment';
import { createStructuredSelector } from 'reselect';
import { Comment, Skeleton, Typography } from 'antd';

import * as postsSelectors from '../../redux/posts/selectors';
import * as usersSelectors from '../../redux/users/selectors';

class PostInfo extends PureComponent {
  static propTypes = {
    userInfo: PropTypes.object,
    userError: PropTypes.object,
    userLoading: PropTypes.bool,

    postInfo: PropTypes.object,
    postError: PropTypes.object,
    postLoading: PropTypes.bool,
  };

  static defaultProps = {
    postInfo: null,
    postError: null,
    postLoading: false,
    userInfo: null,
    userError: null,
    userLoading: false,
  };

  render() {
    const {
      postInfo, postLoading, postError,
      userInfo, userLoading, userError,
    } = this.props;

    let content;
    let author;
    let datetime;

    if (postLoading || userLoading) {
      content = <Skeleton />;
    }

    if (!postLoading && !userLoading && postInfo) {
      content = (
        <>
          <Typography.Title level={4}>{postInfo.title}</Typography.Title>
          <div dangerouslySetInnerHTML={{ __html: postInfo.body }} />
        </>
      );
      datetime = moment(postInfo.createdAt).format('dddd, MMMM Do YYYY, hh:mm:ss');
    }

    if (!postLoading && !userLoading && postError) {
      content = <div>{postError}</div>;
    }

    if (!postLoading && !userLoading && userInfo) {
      author = `${userInfo.name} (${userInfo.email})`;
    }

    if (!postLoading && !userLoading && userError) {
      author = '...';
    }

    return (
      <Comment
        author={author}
        content={content}
        datetime={datetime}
      />
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postInfo: postsSelectors.selectorItem,
  postLoading: postsSelectors.selectorLoadingItem,
  postError: postsSelectors.selectorErrorItem,
  userInfo: usersSelectors.selectorItem,
  userLoading: usersSelectors.selectorLoading,
  userError: usersSelectors.selectorError,
});

export default connect(mapStateToProps)(PostInfo);
