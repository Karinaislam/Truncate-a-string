function input(){

	var string = document.getElementById('input1').value;
	var num = document.getElementById('input2').value;
	var output = truncateString(string, num);
	document.getElementById('output').innerHTML= output;


}

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}