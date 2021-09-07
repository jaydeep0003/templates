const data = [
	["Gujarat", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Uttar Pradesh", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Andhra Pradesh", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Tamil Nadu", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["West Bengal", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Delhi", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Rajasthan", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Punjab", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Haryana", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Assam", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Goa", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US'],
	["Mizoram", 123, 234, 345, 450006, 123456789, 'Gondal', 'india', 'US'],
]

var newdata = '';
var store =document.getElementById("cell").innerHTML; 
data.forEach((value,index) => {
	if(index % 2 == 0) {
		store = `
	<div class="table_row " id='td-row' onmouseover='first_hover("${value[0]}")'>
		<div class="cell fixed" id = 'dropdown-menu'>
			<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
		</div>

		<div class="cell statistic u_hover" id="hover-id">
			<div class="delta is-confirmed" >${value[1]}</div>
			
		</div>

		<div class="cell statistic u_hover">
			<div value=''>${value[2]}</div>
		</div>

		<div class="cell statistic u_hover">
			<div class="delta is-recovered">${value[3]}</div>
			
		</div>

		<div class="cell statistic u_hover">
			<div class="delta is-deceased">${value[4]}</div>
			
		</div>
		<div class="cell statistic u_hover">
			<div class="delta is-deceased">${value[5]}</div>
			
		</div>
		<div class="cell statistic u_hover hide_cell">
			<div class="delta is-deceased">${value[6]}</div>
			
		</div>
		<div class="cell statistic u_hover hide_cell">
			<div class="delta is-deceased">${value[7]}</div>
			
		</div>
		<div class="cell statistic u_hover hide_cell">
			<div class="delta is-deceased">${value[8]}</div>
			
		</div>			

	</div>
	`
	}

	else
	{
		store = `
		<div class='table_row ' id='td-row' onmouseover='first_hover("${value[0]}")'>
			<div class="cell fixed">
				<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
			</div>

			<div class="cell statistic new_class u_hover" id="hover-id">
				<div class="delta is-confirmed">${value[1]}</div>
				
			</div>

			<div class="cell statistic new_class u_hover">
				<div>${value[2]}</div>
			</div>

			<div class="cell statistic new_class u_hover">
				<div class="delta is-recovered">${value[3]}</div>
				
			</div>

			<div class="cell statistic new_class u_hover">
				<div class="delta is-deceased">${value[4]}</div>
				
			</div>

			<div class="cell statistic new_class u_hover">
				<div class="delta is-deceased">${value[5]}</div>
				
			</div>
			<div class="cell statistic u_hover new_class hide_cell">
			<div class="delta is-deceased">${value[6]}</div>
			
		</div>
		<div class="cell statistic u_hover new_class hide_cell">
			<div class="delta is-deceased">${value[7]}</div>
			
		</div>
		<div class="cell statistic u_hover new_class hide_cell">
			<div class="delta is-deceased">${value[8]}</div>
			
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

	document.getElementById('right-arrow').addEventListener('click',myfun);

	function myfun(){
		var click = document.getElementById('right-arrow');
		var hide = document.getElementsByClassName('hide_cell');

		console.log(hide)

		if(click.classList.contains('right_arrow'))
		{
			click.classList.remove('right_arrow');
			click.classList.add('new_right_arrow');

			if(hide.classList.contains('hide_cell'))
			{
				hide.classList.remove('hide_cell');
				// hide.classList.add('new_hide_class');
			}

			else
			{
				// hide.classList.remove('new_hide_class');
				hide.classList.add('hide_cell');
			}

		}

		else
		{
			click.classList.remove('new_right_arrow');
			click.classList.add('right_arrow');
			click.classList.add('hide_cell');

		}
	}

	





	



