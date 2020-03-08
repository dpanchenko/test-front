import { get, post } from '../helpers/request';

export function getList({ page = 1, limit }) {
  const offset = page > 0 ? (page - 1) * limit : 0;

  return get('posts', null, { 'x-offset': offset, 'x-limit': limit });
}

export function getItem(id) {
  return get(`posts/${id}`);
}

export function importItems() {
  return post('posts/import');
}
