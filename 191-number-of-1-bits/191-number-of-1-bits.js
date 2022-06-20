/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let arr=n.toString(2);
    let count =0;
    for (let x of arr){
        if(x==='1'){
            count++;
        }
    }
    return count 
};