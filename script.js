// complete the given function

function palindrome(str){
	let l = 0, r = str.length-1;
	while(l < r) {
		let s = str.charAt(l)-'a' >= 0 && str.charAt(l)-'a' <= 25 ? str.charAt(l)-'a' : str.charAt(l)-'A';
		let b = str.charAt(r)-'a' >= 0 && str.charAt(r)-'a' <= 25 ? str.charAt(r)-'a' : str.charAt(r)-'A';
		
		if (s!=b) {
			return false;
		}
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome
