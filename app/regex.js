exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var pattern = /\d/;
    return pattern.test(str);
  },

  containsRepeatingLetter : function(str) {
    var pattern = /([a-zA-Z])\1/i;
    return pattern.test(str);
  },

  endsWithVowel : function(str) {
    var pattern = /.*([aeiou])$/ig;
    return pattern.test(str);
  },

  captureThreeNumbers : function(str) {
    var ret = str.match(/[0-9]{1}[0-9]{2}/);
    return (ret == null) ? false : '' + ret.shift();
  },

  matchesPattern : function(str) {
    var pattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;
    return pattern.test(str);
  },
  
  isUSD : function(str) {
    var pattern = /^\$\d+(\.[0-9]{2}|,[0-9]{3},[0-9]{3}\.[0-9]{2}|,[0-9]{3},[0-9]{3})/;
    return pattern.test(str);
  }
};
