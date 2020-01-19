/**
 *  Entry function. Handles empty and non-2d arrays.
 *  Initializes an nxn zero-filled array that will serve as a helping tool pattern traversal
 *  Calls the crawl function with initial values starting at 0,0 and right-wards movement
 * @param array 2-dimensional array that will be traversed
 * @returns {*|Array|Array|*} Returns an array with clockwise pattern values from the 2d array input.
 */
snail = function(array) {
    // enjoy
    let isEmpty = array.every( a => !a.length);
    if(isEmpty)
        return [];
    if(array.length===1)
        return array[0];

    let pattern = []
    let flags = array.map( iarr => {
        return iarr.map( () => 0)
    })
    pattern = crawl(pattern,0,0,array,"RIGHT",flags,array[0].length);

    return pattern;

}

/**
 * Recursive function that traverses the 2d array in an inward clockwise pattern
 * @param stack The array that contains the patterned values
 * @param x current outer array index
 * @param y current inner array index
 * @param array input array
 * @param dir current direction
 * @param next direction to process
 * @param n nxn array size
 * @returns {*} Terminating condition returns the array with complete patterned values
 */
function crawl(stack,x,y,array,dir,flags,n){
    stack.push(array[x][y])
    flags[x][y] = 1;

    //Terminating condition when all flags are set to 1
    let done = flags.every( arr => {
        return arr.every( element => element >0)
    });
    if(done){
        return stack
    }

    //Switch direction if index is in a corner
    if(x===0 && y===0)
        dir="RIGHT"
    else if(x===0 && y===n-1)
        dir="DOWN"
    else if(x===n-1 && y===n-1)
        dir="LEFT"
    else if(x===n-1 && y===0)
        dir="UP"

    //Switch direction based on surrounding
    if(dir==="RIGHT" && flags[x][y+1]===1)
        dir="DOWN"
    else if(dir==="DOWN" && flags[x+1][y]===1)
        dir="LEFT"
    else if(dir==="LEFT" && flags[x][y-1]===1)
        dir="UP"
    else if(dir==="UP" && flags[x-1][y]===1)
        dir="RIGHT"

    let newx = x;
    let newy = y;

    //Set next movement
    switch(dir){
        case "RIGHT":
            newy++;
            break;
        case "LEFT":
            newy--;
            break;
        case "UP":
            newx--;
            break;
        case "DOWN":
            newx++;
    }
    return crawl(stack,newx,newy,array,dir,flags,n);
}