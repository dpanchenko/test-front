import { get } from '../helpers/request';

export function getItem(id) {
  return get(`users/${id}`);
}
