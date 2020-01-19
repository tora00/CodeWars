/**
 * A reducing function that removes immediate conflicting movements in a given array of directions.
 * eg. ["NORTH","SOUTH","EAST","WEST"] = []
 * eg. ["NORTH","SOUTH","WEST"] = ["WEST"]
 * @param arr
 * @returns {*}
 */
function dirReduc(arr){

    let dir = {
        d1 : "NORTH",
        d2 : "SOUTH",
        d3 : "EAST",
        d4 : "WEST"
    }

    let i = 0;
    while(i<arr.length-1){
        if((arr[i] === dir.d1 && arr[i+1] === dir.d2) ||
            (arr[i] === dir.d2 && arr[i+1] === dir.d1) ||
            (arr[i] === dir.d3 && arr[i+1] === dir.d4) ||
            (arr[i] === dir.d4 && arr[i+1] === dir.d3)){
            arr.splice(i,2);
            i = 0;
        }
        else{
            i++;
        }
    }
    return arr

}

function flatDeep(arr, d = 1) {
    return d > 0 ? arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val), [])
        : arr.slice();
};