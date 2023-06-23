// complete the given function

function palindrome(str){
	let l = 0, r = str.length;
	while(l < r) {
		if (str.charAt(l)!==str.charAt(r)) {
			return false;
		}
	}
	return true;
}
module.exports = palindrome
