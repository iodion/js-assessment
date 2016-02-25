exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
     return arr.indexOf(item);
  },

  sum : function(arr) {
      sum = 0;
      for(i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      return sum;
  },

  remove : function(arr, item) {
    for(i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
            
            //shift array
            for (n = i; n < arr.length; n++) {
              arr[n] = arr[n+1];
            }
            
            //remove last element, because there is a copy at length-2
            arr.pop();
        }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {
    for(i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
            arr[i] = -1;
        }
    }
    arr.sort();
    while (arr[0] < 0){
       arr.shift();
    }
    
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
     arr.pop();
     return arr;
  },

  prepend : function(arr, item) {
     arr.unshift(item);
     return arr;
  },

  curtail : function(arr) {
     arr.shift();
     return arr;
  },

  concat : function(arr1, arr2) {
    for(i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    return arr1;
  },

  insert : function(arr, item, index) {
      tmp = arr.splice(index);
      arr.push(item);
      this.concat(arr, tmp);
      return arr;
  },

  count : function(arr, item) {
    counter = 0;
    for(i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
           counter++;
        }
    }
    return counter;
     
  },

  duplicates : function(arr) {
     duplicates = {};
     arr.sort();
     for(i = 0; i < arr.length; i++) {
       if (arr[i] == arr[i+1]) {
         duplicates[arr[i]] = arr[i];
       }
     }
     
     arr2 = [];
     for(key in duplicates) {
       arr2.push(parseInt(key));
     }
     
     return arr2;
  },

  square : function(arr) {
     for (i in arr) {
        arr[i] = arr[i] * arr[i];
     }
     return arr;
  },

  findAllOccurrences : function(arr, target) {
     ret = [];
     for (i in arr) {
        if (arr[i] == target)
           ret.push(i);
     }
     
     return ret;
  }
};
