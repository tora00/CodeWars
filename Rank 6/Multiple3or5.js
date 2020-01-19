/**
 * Entry point. This function finds an integer input's 3 and 5 multiple values and sums the distinct values.
 * Handles values that are only multiples of either 3 or 5.
 * @param number The integer input to process
 * @returns {number|*} The sum of distinct values of the input's 3 and 5 multiples
 */
function solution(number){

    if(number<=3)
        return 0;
    else if(number>3 && number<=5)
        return 3;
    let datam = findMultiple(number,3).concat(findMultiple(number,5));
    if(datam.length<2)
        return datam[0];
    return datam.filter((num,index) => datam.indexOf(num) === index).reduce((a,b) => a+b);

}

/**
 * Helper function that returns the array of a given input's multiples of a certain number
 * @param number
 * @param multiple
 * @returns {Array}
 */
function findMultiple(number,multiple){
    let repeat = Math.floor((number-1)/multiple);
    let data = [];
    for(let i = 1; i<=repeat; i++){
        data.push(multiple*i);
    }
    return data;
}