function arraysEqual(a,b) { return !!a && !!b && !(a<b || b<a); }

Array.prototype.equals = function(b) {
  return arraysEqual(this, b);
}

Array.prototype.isPalindromic = function() { return this.concat().equals(this.reverse()); }

function getHighestPalindrome () {
	var max = 1000;
	var min = 100;
  var palindrome = 0;
	for (var n = max; max >= n && n >= min; n--) {
    for (var m = max; max >= m && m >= min; m--) {
      var p = n * m;
      if (p.toString().split("").isPalindromic()) {
        if (p > palindrome) {
          palindrome = p;
        }
      }
    }
  }
  return palindrome;
}