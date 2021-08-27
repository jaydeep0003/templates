
const items = ['items_first', 'items_second']
for(var i of items){
var k = '';
	for(var j of i){
		k += j;
		document.getElementById('search').value = k;
		setTimeout(3000);
		// console.log(setTimeout)
	}

}
