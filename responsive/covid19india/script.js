
const items = ['jaydeep']
for(var i of items){
var k = '';
	for(var j of i){
		k += j;
		
		
		setTimeout(function(){
			document.getElementById('search').value = k;
		},2000);
		
	};

}
