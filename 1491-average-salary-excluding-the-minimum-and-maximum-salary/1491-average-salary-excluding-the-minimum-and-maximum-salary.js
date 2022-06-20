/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    const max=Math.max(...salary);
    const min =Math.min(...salary)
    salary.splice(salary.indexOf(max),1);
    salary.splice(salary.indexOf(min),1);
    let sum=0;
    for(let x of salary){
        sum+=x;
    }
    return sum/salary.length
};