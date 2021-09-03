
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
	["rj", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gujarat", 123, 234, 345, 456, 'jaydeep'],
	["Gondal", 123, 234, 345, 456, 'jaydeep'],
	["Rajkot", 123, 234, 345, 450006, 'jaydeep'],
]

var newdata = '';
var store =document.getElementById("cell").innerHTML; 
data.forEach((value,index) => {
	if(index % 2 == 0) {
		store = `
		
	<div class="cell fixed">
		<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-confirmed" >${value[1]}</div>
		<div>64,69,332</div>
	</div>

	<div class="cell statistic">
		<div value=''>${value[2]}</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-recovered">${value[3]}</div>
		<div>62,700,332</div>
	</div>

	<div class="cell statistic">
		<div class="delta is-deceased">${value[4]}</div>
		<div>1,37,332</div>
	</div>
	<div class="cell statistic ">
		<div class="delta is-deceased">${value[5]}</div>
		<div>1,37,332</div>
	</div>
	
	`
	}

	else
	{
		store = `

			<div class="cell fixed">
				<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
			</div>

			<div class="cell statistic new_class " >
				<div class="delta is-confirmed">${value[1]}</div>
				<div>64,69,332</div>
			</div>

			<div class="cell statistic new_class ">
				<div>${value[2]}</div>
			</div>

			<div class="cell statistic new_class ">
				<div class="delta is-recovered">${value[3]}</div>
				<div>62,700,332</div>
			</div>

			<div class="cell statistic new_class ">
				<div class="delta is-deceased">${value[4]}</div>
				<div>1,37,332</div>
			</div>

			<div class="cell statistic new_class ">
				<div class="delta is-deceased">${value[5]}</div>
				<div>1,37,332</div>
			</div>
		`	
	}
	newdata += store;
	});
	
	document.getElementById("cell").innerHTML = newdata;


