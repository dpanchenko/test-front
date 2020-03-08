import { stringify } from 'querystring';
import { getConfig } from './appConfig';

async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = await response.json();
  throw error;
}

async function request(path, method, data, headers = {}) {
  const API_URL = getConfig('API_URL');
  const API_PREFIX = getConfig('API_PREFIX');
  const payload = data ? JSON.stringify(data) : null;
  const contentLength = payload ? payload.length.toString() : 0;

  const headersConfig = {
    'Accept-Language': 'en-US',
    'Content-Type': 'application/json',
    'Content-Length': contentLength.toString(),
    ...headers,
  };

  const requestHeaders = new Headers(headersConfig);

  const url = `${API_URL}${API_PREFIX}/${path}`;

  const response = await fetch(url, {
    method,
    headers: requestHeaders,
    body: payload,
    mode: 'cors',
    cache: 'no-cache',
  });

  await checkStatus(response);

  try {
    return response.status !== 204 ? await response.json() : null;
  } catch (e) {
    console.error('API client could not parse response body', response.status);
  }

  return null;
}

export function post(path, data, headers) {
  return request(path, 'POST', data, headers);
}

export function put(path, data, headers) {
  return request(path, 'PUT', data, headers);
}

export function patch(path, data, headers) {
  return request(path, 'PATCH', data, headers);
}

export function del(path, data, headers) {
  return request(path, 'DELETE', data, headers);
}

export function get(path, query, headers) {
  let queryString = '';

  if (query) {
    for (const key in query) { // eslint-disable-line
      if (Array.isArray(query[key]) && query[key].length === 0) {
        query[key] = ['']; // eslint-disable-line
      }
    }
    queryString += `?${stringify(query)}`;
  }

  return request(path + queryString, 'GET', null, headers);
}
