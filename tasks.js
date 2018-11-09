Array.prototype.myForEach = function(callback){
    for (i = 0; i < this.length; i++){
        callback(this[i],i,this);
    }
}

Array.prototype.myMap = function(callback){
    var newArr = [];
    for (i = 0; i < this.length; i++){
        newArr[i] = callback(this[i],i,this);
    }
    return newArr;
}

Array.prototype.mySort = function (compareFunction){
    for(i = 0; i < this.length; i++) {
        for (j = i + 1; j < this.length; j++) {
            if (compareFunction(this[i], this[j]) > 0) {
                var temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
}

Array.prototype.myFilter = function(callback){
    var newArray = [];
    for(i = 0; i < this.length; i++){
        if (callback(this[i],i,this)){
            newArray.push(this[i]);
        }
    }

    return newArray;
}

Array.prototype.myPush = function (){
    for(i = 0; i < arguments.length; i++){
        this[this.length] = arguments[i];
    }
}



var arr = [4,5,2,7,8,15,-1,10];

arr.myForEach(function(currentValue, index, array){
    console.log('currentValue = ' + currentValue, 'index = ' + index, array);
});

var newArr = arr.myMap(function(currentValue, index, array){
    return currentValue * 2;
});

console.log(newArr);

arr.mySort(function(a,b){
    return a - b;
});

console.log(arr);


 newArr =  arr.myFilter(function(element,index,array){
    return element > 0;
});

console.log(newArr);

arr.myPush(88,'svsfs','1234',335353);

console.log(arr);