let array = [1,2,3,4,5];
let part = 4;

const arrayChunk = (array,part) =>{
    let result = [];
    let chunk = [];
    let count = 0;
    for(let i=0; i < array.length; i++){
        let last;
        if(count < part) {
            if(array[i + 1] == undefined) {
              last = array[i];
            }
            chunk.push(array[i])
            count++
        }
        
        if(count === part) {
            result.push(chunk)
           count = 0;
           chunk = [];
        }
        
        if(last && count !== part) {
           if(chunk.length) {
            result.push(chunk)
           }
          }
      
      }
      return result
  }
console.log(arrayChunk(array,part)) 






