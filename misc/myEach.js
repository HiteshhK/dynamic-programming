Array.prototype.myEach = function myEach(callback){
    for(let i =0; i < this.length;i+=1){
        if(this.hasOwnProperty(i)){
            callback(this[i],i,this);
        }
    }
};

const arr = [1,'ashok',3,4];
arr.forEach(el=> console.log(el));
console.log('-------------');

//testing myEach()
arr.myEach(el=> console.log(el));