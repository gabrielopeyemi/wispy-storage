
export const addToWispy = ( key: string, data : any) => {
  // add to localstorage without encoding
  window.localStorage.setItem(key, JSON.stringify(data));
  console.log('stored');
  return
};

export const getFromWispy = (key: any) => {
  let data: any = window.localStorage.getItem(key);
  return JSON.parse(data);
  
}

export const deleteFromWispy = (key: string) => {
  window.localStorage.removeItem(key);
}

export const cleanWispy = () => {
 return window.localStorage.clear();
}