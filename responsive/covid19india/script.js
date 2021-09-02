
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
	["Rajkot", 583, 548841, 1245, 52486],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
	["Gujarat", 123, 234, 345, 456],
]

inner = document.getElementById("cell").innerHTML;
for(item=0; item<data.length; item++)
{
	console.log(item, data[item]);
	inner += `
	<div class="cell">
		<div class="state_name" id="table-first-value" value=''>${data[item][0]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-confirmed" class="state_name" id="table-second-value" value=''>↑4,456</div>
		<div>${data[item][1]}</div>
	</div>

	<div class="cell statistic">
		<div id="table-third-value" class="state_name" value=''>${data[item][2]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-recovered" class="state_name" id="table-fourth-value" value=''>↑5,156</div>
		<div>${data[item][3]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-deceased" class="state_name" id="table-fifth-value" value=''>↑183</div>
		<div>${data[item][4]}</div>
	</div>
	`
}

document.getElementById("cell").innerHTML = inner;