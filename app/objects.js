exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
     
     function G(greeting, name) {
        this.name = name;
        this.greeting = greeting;
     }
     
     var obj = new G(obj.greeting, obj.name);
     obj.sayIt = fn;
     
     return obj.sayIt();
  },

  alterObjects : function(constructor, greeting) {
     constructor.prototype.greeting = greeting;
     return constructor;
  },

  iterate : function(obj) {
     ret = [];
     for(key in obj) {
       ret.push(key + ': ' + obj[key]);
     }
     ret.pop();
     return ret;
  }
};
