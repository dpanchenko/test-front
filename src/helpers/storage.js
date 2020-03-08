export function setItem(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function getItem(key) {
  try {
    const result = window.localStorage.getItem(key);
    return result ? JSON.parse(result) : null;
  } catch (e) {
    console.error(e);
  }

  return null;
}

export function removeItem(key) {
  window.localStorage.removeItem(key);
}
