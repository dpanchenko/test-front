import * as Storage from './storage';

export function getConfig(key) {
  return Storage.getItem(key);
}

export function updateConfig(key, value) {
  return Storage.setItem(key, value);
}

export function removeConfig(key) {
  return Storage.removeItem(key);
}

export function setConfig(config) {
  Object.keys(config).forEach((key) => updateConfig(key, config[key]));
}
