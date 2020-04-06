let array = new Array(2, 6, -9, 11, 30, -20, 16)
function findMax(arr){
    let max = arr[0];
    for ( let i = 0; i<arr.length; i++){
        if (max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}