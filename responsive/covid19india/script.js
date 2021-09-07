const data = [
	["Gujarat", 123, 234, 345, 456, 123456789],
	["Uttar Pradesh", 123, 234, 345, 456, 123456789],
	["Andhra Pradesh", 123, 234, 345, 456, 123456789],
	["Tamil Nadu", 123, 234, 345, 456, 123456789],
	["West Bengal", 123, 234, 345, 456, 123456789],
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
	<div class="table_row u_hover" onmouseover='first_hover("${value[0]}")'>
		<div class="cell fixed" id = 'dropdown-menu'>
			<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
		</div>

		<div class="cell statistic u_hover" id="hover-id">
			<div class="delta is-confirmed" >${value[1]}</div>
			<div>64,69,332</div>
		</div>

		<div class="cell statistic u_hover">
			<div value=''>${value[2]}</div>
		</div>

		<div class="cell statistic u_hover">
			<div class="delta is-recovered">${value[3]}</div>
			<div>62,700,332</div>
		</div>

		<div class="cell statistic u_hover">
			<div class="delta is-deceased">${value[4]}</div>
			<div>1,37,332</div>
		</div>
		<div class="cell statistic u_hover">
			<div class="delta is-deceased">${value[5]}</div>
			<div>1,37,332</div>
		</div>
	</div>
	`
	}

	else
	{
		store = `
		<div class='table_row' onmouseover='first_hover("${value[0]}")'>
			<div class="cell fixed">
				<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
			</div>

			<div class="cell statistic new_class u_hover" id="hover-id">
				<div class="delta is-confirmed">${value[1]}</div>
				<div>64,69,332</div>
			</div>

			<div class="cell statistic new_class u_hover">
				<div>${value[2]}</div>
			</div>

			<div class="cell statistic new_class u_hover">
				<div class="delta is-recovered">${value[3]}</div>
				<div>62,700,332</div>
			</div>

			<div class="cell statistic new_class u_hover">
				<div class="delta is-deceased">${value[4]}</div>
				<div>1,37,332</div>
			</div>

			<div class="cell statistic new_class u_hover">
				<div class="delta is-deceased">${value[5]}</div>
				<div>1,37,332</div>
			</div>
		</div>
		`	
	}
	newdata += store;
	});
	
	document.getElementById("cell").innerHTML = newdata;

	function first_hover(val){	
		document.getElementById('select').value = val;
		console.log(val)
	}


	





	



