
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
	["Gujarat", 123, 234, 345, 456, 123456789],
	["Uttar Pr", 123, 234, 345, 456, 123456789],
	["Andhra Pr", 123, 234, 345, 456, 123456789],
	["Tamil Na", 123, 234, 345, 456, 123456789],
	["West Be", 123, 234, 345, 456, 123456789],
	["Delhi", 123, 234, 345, 456, 123456789],
	["Rajasthan", 123, 234, 345, 456, 123456789],
	["Punjab", 123, 234, 345, 456, 123456789],
	["Haryana", 123, 234, 345, 456, 123456789],
	["Assam", 123, 234, 345, 456, 123456789],
	["Goa", 123, 234, 345, 456, 123456789],
	["Mizoram", 123, 234, 345, 450006, 123456789],
]

var newdata = '';
var store =document.getElementById("cell").innerHTML; 
data.forEach((value,index) => {
	if(index % 2 == 0) {
		store = `
		
	<div class="cell fixed" id = 'dropdown-menu'>
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

	var element = document.getElementById('cell');
	var test = element.getElementsByClassName('.fixed');
	console.log(test)

	



