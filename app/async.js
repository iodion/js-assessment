exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
     return new Promise(function(resolve, reject){
        
        switch(value) {
          case true:
            resolve(true);
            break;
          case "success":
            resolve("success");
            break;
          default:
            reject(false);
        }
        
     });
  },

  manipulateRemoteData : function(url) {
     return new Promise(function(resolve, reject){
        $.getJSON(url, {}, function(data, status){
           if ('success' == status) {
             ret = [];
             people = data.people;
             for (key in people){
               ret.push(people[key].name);
             }
             resolve(ret.sort());
           } else {
              reject(false);
           }
        });
     });
  }
};
