/**
 * Given an array of integers, finds the entry with the most odd repeating numbers
 * @param A
 * @returns {number}
 */
function findOdd(A) {
    //initialize empty object array
    let intarray = []
    let cntarray = []

    A.forEach( x => {
        let findx = intarray.indexOf(x);
        if(findx > -1){
            cntarray[findx] += 1
        }
        else{
            intarray.unshift(x)
            cntarray.unshift(1);
        }
    });

    let highestOddNum = -1;
    let highestOddCnt = -1;
    cntarray.forEach( (cnt, i) => {
        if(cnt%2 === 1 && cnt > highestOddCnt){
            highestOddNum = intarray[i];
        }
    });

    return highestOddNum;
}