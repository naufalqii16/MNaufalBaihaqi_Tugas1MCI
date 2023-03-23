function dim(arr) {
    if (arr instanceof Array) {
      return [arr.length].concat(dim(arr[0]));
    } else {
      return [];
    }
  }
  // fungsi di atas akan mengembalikan ukuran dari array yang menjadi input value.

const arr = [
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [1, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ],
    [
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ],
  ];

let sizeArr = dim(arr);
let sizeLevelPertama = sizeArr[0],
    sizeLevelKedua = sizeArr[1],
    sizeLevelKetiga = sizeArr[2];
    
var result = [];

for(let i = 0; i<sizeLevelPertama; i++){
    for(let j = 0; j<sizeLevelKedua; j++){
        for(let k=0; k<sizeLevelKetiga; k++){
            if(arr[i][j][k] != 0){
                let temp = [i,j,k];
                result.push(temp)
            }
        }
    }
}
console.log(result)