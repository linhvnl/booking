// import React/Hook/Router...

// function custom hook - work with Local Storage
const useLocalStorage = () => {
  // FUNCTION lưu DATA xuống LocalStorage ()
  function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // FUNCTION lấy DATA từ LocalStorage theo Key tương ứng
  function getFromStorage(key, defaultVal) {
    return JSON.parse(localStorage.getItem(key)) || defaultVal;
  }

  // FUNCTION lấy DATA từ LocalStorage theo Key tương ứng
  function removeFromStorage(key) {
    localStorage.removeItem(key);
  }

  // trả lại 1 object chứa 2 phương thức
  return {
    save: saveToStorage,
    get: getFromStorage,
    remove: removeFromStorage,
  };
};

export default useLocalStorage;
