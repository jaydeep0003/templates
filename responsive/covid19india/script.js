
const items = ['first','second']
for(var i of items){
	let k = '';
	for(var j of i){
		k += j;
		setTimeout(()=>{
			document.getElementById('search').value = k;
			console.log(document.getElementById('search').value = k);
		},3000);
	}
}
