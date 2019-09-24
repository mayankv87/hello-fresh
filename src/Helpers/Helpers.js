export const getRecipeTime = time => {
  if (time) {
    return `${time.replace(/[^0-9]/g, '')} minutes`;
  }
  return '';
};

export const isItemExistInLocalstorage = item => {
  if (localStorage.getItem(item) === null) {
    return false;
  }
  return true;
};

export const setItemInLocalStorage = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};

export const getItemFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};
