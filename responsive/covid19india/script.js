
const items = ['first','second']
for(var i of items){
	for(var j of i){
		let k = '';
		k += j;
		setTimeout(()=>{
			document.getElementById('search').value = k;
			console.log(document.getElementById('search').value = k);
		},2000);
	}

}
