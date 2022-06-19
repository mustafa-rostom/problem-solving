/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let product=1;
    let sum=0;
    let arrNum=n.toString();
    for(let x of arrNum){
        sum+=Number(x);
        product*=Number(x);
    }
    return product-sum
};