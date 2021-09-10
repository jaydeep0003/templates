console.log('first Coll')

async function getData(){
	

	try {
		let response = await fetch('https://data.covid19india.org/v4/min/data.min.json')
		let fetch_data = await response.json()
		let store =document.getElementById("cell").innerHTML;

			console.log('fff')
		for(let k of Object.keys(fetch_data)){
			let value = fetch_data[k].total
			let confirmed = value.confirmed
			let recovered = value.recovered
			console.log(recovered)

			if(k %2 == 0 ){
			store = `
				<div class="table_row " id='table-row' onmouseover='first_hover("${recovered}")'>
					<div class="cell fixed dark_mode_cell" id = 'dropdown-menu'>
						<div class="state_name" id="table-first-value" value=''>${recovered}</div>
					</div>

					<div class="cell statistic u_color u_hover " id="hover-id">
						<div class="delta is-confirmed" id='id1' >${confirmed}</div>
						
					</div>

					<div class="cell statistic u_color u_hover ">
						<div value=''>${recovered}</div>
					</div>

					<div class="cell statistic u_color u_hover ">
						<div class="delta is-recovered">${value[3]}</div>
						
					</div>

					<div class="cell statistic u_color u_hover ">
						<div class="delta is-deceased">${value[4]}</div>
						
					</div>
					<div class="cell statistic u_color u_hover ">
						<div class="delta is-active">${value[5]}</div>
						
					</div>
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[6]}</div>
						
					</div>
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[7]}</div>
						
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[8]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[9]}</div>
					</div>	
							
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[10]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[11]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is-deceased">${value[12]}</div>
					</div>

				</div>
	`
		}
		else {
			store = `
				<div class='table_row' id='table-row' onmouseover='first_hover("${value[0]}")'>
		 			<div class="cell fixed dark_mode_cell" id='row-first-id'>
		 				<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
		 				<div class="delta is-confirmed">${value[1]}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ligth_color ">
		 				<div>${value[2]}</div>
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-recovered">${value[3]}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-deceased">${value[4]}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-active">${value[5]}</div>
						
		 			</div>
		 			<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is-deceased">${value[6]}</div>
					
		 		</div>
		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is-deceased">${value[7]}</div>
					
		 		</div>
		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is-deceased">${value[8]}</div>
		 		</div>

		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is-deceased">${value[9]}</div>
		 		</div>

		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is-deceased">${value[10]}</div>
		 		</div>

		 		<div class="cell statistic u_hover new_class hide_cell u_color ">
		 			<div class="delta is-deceased">${value[11]}</div>
		 		</div>

		 		<div class="cell statistic u_hover new_class hide_cell u_color ">
		 			<div class="delta is-deceased">${value[12]}</div>
		 		</div>

		 		</div>
 		`	
		}
		newdata += store;
	}

	document.getElementById("cell").innerHTML = newdata;


		// return fetch_data
	}

	catch(error) {
		console.log(error)
	}


}

async function render() {
await getData()
}
render()

console.log('hhhhhhhhhhhhhhhhhhhhhh')




	




const data = [
	["Gujarat", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["UP", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["AP", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["TN", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["WB", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Delhi", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Rajasthan", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Punjab", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Haryana", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Assam", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Goa", 123, 234, 345, 456, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
	["Mizoram", 123, 234, 345, 450006, 123456789, 'Gondal', 'india', 'US', '5.5Cr', '35687', '6.9Cr', '1.9Cr'],
]

var newdata = '';
// // var store =document.getElementById("cell").innerHTML; 

// // data.forEach((value,index) => {
// // 	if(index % 2 == 0) {
// // 		store = `
// // 	<div class="table_row " id='table-row' onmouseover='first_hover("${value[0]}")'>
// // 		<div class="cell fixed dark_mode_cell" id = 'dropdown-menu'>
// // 			<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
// // 		</div>

// // 		<div class="cell statistic u_color u_hover " id="hover-id">
// // 			<div class="delta is-confirmed" >${value[1]}</div>
			
// // 		</div>

// // 		<div class="cell statistic u_color u_hover ">
// // 			<div value=''>${value[2]}</div>
// // 		</div>

// // 		<div class="cell statistic u_color u_hover ">
// // 			<div class="delta is-recovered">${value[3]}</div>
			
// // 		</div>

// // 		<div class="cell statistic u_color u_hover ">
// // 			<div class="delta is-deceased">${value[4]}</div>
			
// // 		</div>
// // 		<div class="cell statistic u_color u_hover ">
// // 			<div class="delta is-active">${value[5]}</div>
			
// // 		</div>
// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[6]}</div>
			
// // 		</div>
// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[7]}</div>
			
// // 		</div>

// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[8]}</div>
// // 		</div>

// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[9]}</div>
// // 		</div>	
				
// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[10]}</div>
// // 		</div>

// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[11]}</div>
// // 		</div>

// // 		<div class="cell statistic u_color u_hover  hide_cell">
// // 			<div class="delta is-deceased">${value[12]}</div>
// // 		</div>

// // 	</div>
// // 	`
// // 	}

// // 	else
// // 	{
// // 		store = `
// // 		<div class='table_row' id='table-row' onmouseover='first_hover("${value[0]}")'>
// // 			<div class="cell fixed dark_mode_cell" id='row-first-id'>
// // 				<div class="state_name" id="table-first-value" value=''>${value[0]}</div>
// // 			</div>

// // 			<div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
// // 				<div class="delta is-confirmed">${value[1]}</div>
				
// // 			</div>

// // 			<div class="cell statistic new_class u_hover u_color ligth_color ">
// // 				<div>${value[2]}</div>
// // 			</div>

// // 			<div class="cell statistic new_class u_hover u_color ">
// // 				<div class="delta is-recovered">${value[3]}</div>
				
// // 			</div>

// // 			<div class="cell statistic new_class u_hover u_color ">
// // 				<div class="delta is-deceased">${value[4]}</div>
				
// // 			</div>

// // 			<div class="cell statistic new_class u_hover u_color ">
// // 				<div class="delta is-active">${value[5]}</div>
				
// // 			</div>
// // 			<div class="cell statistic u_hover u_color  new_class hide_cell">
// // 			<div class="delta is-deceased">${value[6]}</div>
			
// // 		</div>
// // 		<div class="cell statistic u_hover u_color  new_class hide_cell">
// // 			<div class="delta is-deceased">${value[7]}</div>
			
// // 		</div>
// // 		<div class="cell statistic u_hover u_color  new_class hide_cell">
// // 			<div class="delta is-deceased">${value[8]}</div>
// // 		</div>

// // 		<div class="cell statistic u_hover u_color  new_class hide_cell">
// // 			<div class="delta is-deceased">${value[9]}</div>
// // 		</div>

// // 		<div class="cell statistic u_hover u_color  new_class hide_cell">
// // 			<div class="delta is-deceased">${value[10]}</div>
// // 		</div>

// // 		<div class="cell statistic u_hover new_class hide_cell u_color ">
// // 			<div class="delta is-deceased">${value[11]}</div>
// // 		</div>

// // 		<div class="cell statistic u_hover new_class hide_cell u_color ">
// // 			<div class="delta is-deceased">${value[12]}</div>
// // 		</div>

// // 		</div>
// // 		`	
// // 	}
// 	newdata += store;
// 	});
	
	// document.getElementById("cell").innerHTML = newdata;

	function first_hover(val){	
		document.getElementById('select').value = val;
		// console.log(val)
	}

	document.getElementById('right-arrow').addEventListener('click',myfun);

	function myfun(){
		var click = document.getElementById('right-arrow');
		var hide = document.getElementsByClassName('hide_cell');
		var table = document.getElementById('table-container');
		var hero_container = document.getElementById('hero-container');
		var hero = document.getElementById('hero');
		var state_selection = document.getElementById('state-selection');
		var searchbox = document.getElementById('searchbox');
		var panel = document.getElementById('panel');
		var map_swicher = document.getElementById('map-swicher');


		if(click.classList.contains('right_arrow'))
		{
			click.classList.remove('right_arrow');
			click.classList.add('new_right_arrow');

			for (const item of hide) {
				item.classList.add('show')
			}

			table.classList.remove('table_row')
			table.classList.add('click_table')

			hero_container.classList.remove('hero_container');
			hero_container.classList.add('hero_new_container');

			hero.classList.remove('hero')
			hero.classList.add('new_hero')

			state_selection.classList.remove('state_selection');
			state_selection.classList.add('state_new_selection');

			searchbox.classList.remove('searchbox');
			searchbox.classList.add('searchbox_new');

			panel.classList.remove('action_panel');
			panel.classList.add('action_new_panel');

			map_swicher.classList.remove('map_switcher');
			map_swicher.classList.add('map_new_switcher');

		}

		else
		{
			click.classList.remove('new_right_arrow');
			click.classList.add('right_arrow');

			for (const item of hide) {
				item.classList.remove('show')
			}

			table.classList.add('table_row')
			table.classList.remove('click_table')

			hero_container.classList.add('hero_container');
			hero_container.classList.remove('hero_new_container');

			hero.classList.add('hero')
			hero.classList.remove('new_hero')

			state_selection.classList.add('state_selection');
			state_selection.classList.remove('state_new_selection');

			searchbox.classList.add('searchbox');
			searchbox.classList.remove('searchbox_new');

			panel.classList.add('action_panel');
			panel.classList.remove('action_new_panel');

			map_swicher.classList.add('map_switcher');
			map_swicher.classList.remove('map_new_switcher');
		}
	}


	   window.onload = function() {
      var sp = new SuperPlaceholder({
        placeholders: ["Gondal", "To","Rajkot"],
        preText: " ",
        stay: 1000,
        speed: 100,
        element: '#dynamic-placeholder'
      });
      sp.init();
    }


  var SuperPlaceholder = function(options) {  
  this.options = options;
  this.element = options.element
  this.placeholderIdx = 0;
  this.charIdx = 0;
  

  this.setPlaceholder = function() {
      placeholder = options.placeholders[this.placeholderIdx];
      var placeholderChunk = placeholder.substring(0, this.charIdx+1);
      document.querySelector(this.element).setAttribute("placeholder", this.options.preText + " " + placeholderChunk)
  };
  
  this.onTickReverse = function(afterReverse) {
    if (this.charIdx === 0) {
      afterReverse.bind(this)();
      clearInterval(this.intervalId); 
      this.init(); 
    } else {
      this.setPlaceholder();
      this.charIdx--;
    }
  };
  
  this.goReverse = function() {
      clearInterval(this.intervalId);
      this.intervalId = setInterval(this.onTickReverse.bind(this, function() {
        this.charIdx = 0;
        this.placeholderIdx++;
        if (this.placeholderIdx === options.placeholders.length) {
          // end of all placeholders reached
          this.placeholderIdx = 0;
        }
      }), this.options.speed)
  };
  
  this.onTick = function() {
      var placeholder = options.placeholders[this.placeholderIdx];
      if (this.charIdx === placeholder.length) {
        // end of a placeholder sentence reached
        setTimeout(this.goReverse.bind(this), this.options.stay);
      }
      
      this.setPlaceholder();
    
      this.charIdx++;
    }
  
  this.init = function() {
    this.intervalId = setInterval(this.onTick.bind(this), this.options.speed);
  }
  
  this.kill = function() {
    clearInterval(this.intervalId); 
  }
}


document.getElementById('themes').addEventListener('click', () => {
	
	// document.getElementById('themes').innerHTML = 

	// Click to Dark mode on Body
	document.body.classList.toggle('dark_mode');

	if (document.body.classList.contains('dark_mode')) {
		let svg_image = document.getElementById('themes');
		svg_image.innerHTML = `<svg
		xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
		fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
		stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21
		12.79z"></path></svg>`
	}
	else {
		let svg_image = document.getElementById('themes');
		svg_image.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"  fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`
	}
	

		// if (document.body.) {

		// }
});



// data totle 
var sum = 0
var recovered = 0
var deceased = 0
var active = 0

data.forEach((value) => {
	sum = sum + value[1]
	active = active + value[2]
	recovered = recovered+ value[3]
	deceased = deceased + value[4]
})

// console.log(deceased)

document.getElementById('h4-data').innerHTML = '+' + sum;
document.getElementById('recovered').innerHTML = '+' + recovered;
document.getElementById('deceased').innerHTML = '+' + deceased;
document.getElementById('active').innerHTML = '+' + active;
	
