export function setLocalStorage(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getLocalStorage(key: string) {
  localStorage.getItem(key);
}

export function deleteLocalStorage(key: string) {
  localStorage.removeItem(key);
}
