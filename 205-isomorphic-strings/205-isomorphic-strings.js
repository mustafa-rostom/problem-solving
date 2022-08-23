/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
      if (s.length !== t.length) {
        return false;
    }
    if (s === t) {
        return true;
    }
    const obj1 = {};
    const obj2 = {};
    for(let i = 0; i < s.length; i++) {
        if(obj1[s[i]] !== obj2[t[i]]){
            return false
        }else{
            obj1[s[i]]=i;
            obj2[t[i]]=i
        }
    }
    return true;
};