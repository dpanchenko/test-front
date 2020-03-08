import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import moment from 'moment';
import { CommentOutlined } from '@ant-design/icons';

import ActionButton from '../../components/ActionButton';
import { ITEMS_PER_PAGE } from '../../constants';

class ListTable extends PureComponent {
  static propTypes = {
    total: PropTypes.number,
    items: PropTypes.array,
    loading: PropTypes.bool,
    onClick: PropTypes.func,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    total: 0,
    items: [],
    loading: false,
    onClick: () => {},
    onChange: () => {},
  };

  handleChange = (pagination) => {
    const { onChange } = this.props;
    const { current } = pagination;

    onChange(current);
  };

  renderActions = (item) => {
    const { onClick } = this.props;

    return (
      <div className="table-action-buttons">
        <ActionButton title="View" onClick={() => onClick(item)}>
          <CommentOutlined />
        </ActionButton>
      </div>
    );
  };

  render() {
    const { items, total, loading } = this.props;

    const columns = [
      {
        dataIndex: 'title',
        key: 'title',
        title: 'Title',
      },
      {
        dataIndex: 'createdAt',
        key: 'createdAt',
        title: 'Created At',
        render: (value) => moment(value).format('dddd, MMMM Do YYYY, hh:mm:ss'),
      },
      {
        dataIndex: 'actions',
        key: 'actions',
        render: (actions, item) => this.renderActions(item),
      },
    ];

    const paginationConfig = {
      pageSize: ITEMS_PER_PAGE,
      total,
    };

    return (
      <Table
        loading={loading}
        columns={columns}
        dataSource={items}
        pagination={paginationConfig}
        onChange={this.handleChange}
        rowKey="id"
      />
    );
  }
}

export default ListTable;
