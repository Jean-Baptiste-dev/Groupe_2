export function removeItem(itemToRemove) {
 return    window.localStorage.removeItem(itemToRemove);
}
export function getItem(item) {
    window.localStorage.getItem(item);
}

export function addItem(localeStorageName, newItem) {
    window.localStorage.setItem(localeStorageName, newItem);
}