const exceptSelf = (array) => {
  let forArr = [1];
  let placeholder = 1;
  
  for(let i = 1; i < array.length; i ++) {
    forArr[i] = placeholder * array[i - 1];
    
    placeholder = array[i - 1]
  }
  
  let resArr = [1];
  placeholder = 1;
  
  for(let i = array.length - 1; i >= 0; i --) {
    resArr[i] = 1;
    
    resArr[i] *= placeholder;
    
    placeholder *= array[i]
  }
  
  let endArr = new Array(array.length).fill(1);
  
  for(let i = 0; i < array.length; i ++) {
    let a = forArr[i]
    let b = resArr[i]
    
    endArr[i] = a * b
  }
  
  return {
    forArr,
    resArr,
    endArr
  }
};