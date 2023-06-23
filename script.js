// complete the given function

function palindrome(str){
	let l = 0, r = str.length;
	while(l < r) {
		if (str.charCodeAt(l)!=str.charCodeAt(r)) {
			return false;
		}
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome
