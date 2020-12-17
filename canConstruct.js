// const canConstruct = (target,wordBank)=>{
//     if(target === ''){
//         return true;
//     }

//     for(let word of wordBank){
//         if(target.indexOf(word)===0){
//             const suffix = target.slice(word.length);
//             if(canConstruct(suffix,wordBank) === true){
//                 return true;
//             }
//         }
//     }
//     return false;
// }

//brute force complexity
//time:O((n^m)*m)
//space:O(m^2)

//with memoization
const canConstruct = (target,wordBank,memo={})=>{
    if(target in memo) return memo[target];
    if(target === ''){
        return true;
    }

    for(let word of wordBank){
        if(target.indexOf(word)===0){
            const suffix = target.slice(word.length);
            
            if(canConstruct(suffix,wordBank,memo) === true){
                memo[target]= true;
                return true;
            }
        }
    }
    memo[target] = false;
    return false;
}
//memoized complexity
//time:O((n*m^2)
//space:O(m^2)
console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']));//true
console.log(canConstruct('skateboard',['bo','rd','ate','t','ska','sk','boar']));//false
console.log(canConstruct('enterapotentpot',['a','p','ent','enter','ot','ot','t']));//true
console.log(canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef',['e','ee','eee','eeee','eeeee']));//false
