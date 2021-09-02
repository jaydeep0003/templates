
// const items = ['first','second']
// for(var i of items){
// 	let k = '';
// 	for(var j of i){
// 		k += j;
// 		setTimeout(()=>{
// 			document.getElementById('search').value = k;
// 			console.log(document.getElementById('search').value = k);
// 		},3000);
// 	}
// }

const data = [
	["rj", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gondal", 123, 234, 345, 456],
	["Rajkot", 123, 234, 345, 450006],
]


var newdata = '';
var store =document.getElementById("cell").innerHTML; 
data.forEach((value) => {
		console.log(value[0])
	store = `
	<div class="cell">
		<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-confirmed" class="state_name" id="table-second-value" value=''>${value[1]}</div>
		<div>64,69,332</div>
	</div>

	<div class="cell statistic">
		<div id="table-third-value" class="state_name" value=''>${value[2]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-recovered" class="state_name" id="table-fourth-value" value=''>${value[3]}</div>
		<div>62,700,332</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-deceased" class="state_name" id="table-fifth-value" value=''>↑${value[4]}</div>
		<div>1,37,332</div>
	</div>
	`
	newdata += store;

	});
	
document.getElementById("cell").innerHTML = newdata;

