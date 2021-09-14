async function getData(){
	// try {
		let response = await fetch('https://data.covid19india.org/v4/min/data.min.json')
		let fetch_data = await response.json()
		
			
		let store =document.getElementById("cell").innerHTML;

		let newdata = "";
		let counter = 0;
		let delta_confirmed_total = 0
		let delta_recovered_total = 0
		let delta_deceased_total = 0

		let total_confirmed = 0
		let total_recovered = 0
		let total_deceased = 0
		let total_active = 0


		for(let k of Object.keys(fetch_data)){
			let value = fetch_data[k].total
			let other_value = fetch_data[k].delta7

			let total_vaccinated1 = value.vaccinated1
			let total_vaccinated2 = value.vaccinated2
			
			let meta = fetch_data[k].meta
			let population = meta.population

			let confirmed = value.confirmed
			let recovered = value.recovered

			let deceased = value.deceased
			let tested = value.tested

			let other = value.other

			let name = k

			let fully_vaccinated = other_value.vaccinated2
			let delta_deceased = other_value.deceased
			let	delta_confirmed =  other_value.confirmed
			let delta_recovered = other_value.recovered
			let vaccinated = other_value.vaccinated1

			let vaccine_dose_delta = fully_vaccinated + vaccinated
			let vaccine_dose_delta_2 = total_vaccinated1 + total_vaccinated2


			function numFormatter(num) {
				
		    if(num > 999 && num < 1000000){
		        return (num/1000).toFixed(0) + 'K'; 
		    }

		    else if(num > 1000000){
		        return (num/1000000).toFixed(0) + 'L'; 
		    }

		    else if(num < 900){
		        return num;
		    }
		  }
			
		let new_total_vaccinated1 = numFormatter(total_vaccinated1)		
		let new_total_vaccinated2 =	numFormatter(total_vaccinated2)		
		let new_vaccine_dose_delta_2 = numFormatter(vaccine_dose_delta_2)
		let new_vaccine_doese = numFormatter(vaccine_dose_delta)
		let new_vaccinated = numFormatter(vaccinated)
		let new_fully_vaccine = numFormatter(vaccinated)
			// other = new Intl.NumberFormat().format(other)
			// confirmed = new Intl.NumberFormat().format(confirmed)
			tested = new Intl.NumberFormat().format(tested)
			let new_recovered = new Intl.NumberFormat().format(recovered)
			let new_deceased = new Intl.NumberFormat().format(deceased)
			let new_population = new Intl.NumberFormat().format(population)
			// let new_vaccinated = new Intl.NumberFormat().format(vaccinated)
			let new_delta_confirmed =  new Intl.NumberFormat().format(delta_confirmed)
			let new_delta_recovered = new Intl.NumberFormat().format(delta_recovered)
			let new_delta_deceased = new Intl.NumberFormat().format(delta_deceased)

			// let new_fully_vaccine =	new Intl.NumberFormat().format(fully_vaccinated)
			// let new_vaccine_doese = new Intl.NumberFormat().format(vaccine_dose_delta)
			// let new_total_vaccinated1 = new Intl.NumberFormat().format(total_vaccinated1)
			// let new_total_vaccinated2 = new Intl.NumberFormat().format(total_vaccinated2)
			// let new_vaccine_dose_delta_2 = new Intl.NumberFormat().format(vaccine_dose_delta_2)


			let tmp = ''

			if(delta_confirmed == undefined || delta_confirmed == '' || delta_confirmed == null || delta_recovered == undefined || delta_recovered == '' || delta_recovered == null || delta_deceased == undefined || delta_deceased == '' || delta_deceased == null){
				var ot_val = 0

			 	if(other == undefined || other == NaN || other == '' || other == null || other == 'undefined'){
					if(counter % 2 == 0){ 

					 	store = ` <div
						class="table_row "  onmouseover='first_hover("${name}")'>
						<div class="cell fixed dark_mode_cell" id
						= 'dropdown-menu'> <div class="state_name" id="table-first-value"
						value=''>${name}</div> </div>

						<div class="cell statistic u_color u_hover " id="hover-id">
							<div class="delta is-confirmed" id='id1' >${tmp}</div>
							<div class="delta" id='id1' >${new Intl.NumberFormat().format(confirmed)}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
							<div value=''>${recovered}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
						<div value='' class="delta is-recovered">${tmp}</div>
							<div class="delta">${new_recovered}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
							<div class="delta is-deceased">${tmp}</div>
							<div class="delta">${new_deceased}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
							<div class="delta is-active">${ot_val}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta ">${tested}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta is_vaccine">${new_vaccinated}</div>
							<div class="delta">${new_total_vaccinated1}</div>

						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta is_vaccine">${new_fully_vaccine}</div>
							<div class="delta">${new_total_vaccinated2}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta is_vaccine">${new_vaccine_doese}</div>
							 <div class="delta ">${new_vaccine_dose_delta_2}</div>
						</div>	
								
						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta">${value[10]}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta">${value[11]}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta">${new_population}</div>
						</div>
						</div>
					`
					}
					else {
					store = `
						<div class='table_row'  onmouseover='first_hover("${name}")'>
				 			<div class="cell fixed dark_mode_cell" id='row-first-id'>
				 				<div class="state_name" id="table-first-value" value=''>${name}</div>
				 		</div>

			 			<div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
			 				<div class="delta is-confirmed">${new_delta_confirmed}</div>
			 				<div class="delta">${new Intl.NumberFormat().format(confirmed)}</div>
			 			</div>

			 			<div class="cell statistic new_class u_hover u_color ligth_color ">
			 				<div>${recovered}</div>
			 			</div>

			 			<div class="cell statistic new_class u_hover u_color ">
			 				<div class="delta is-recovered">${new_delta_recovered}</div>
			 				<div class="delta">${new_recovered}</div>
			 			</div>

			 			<div class="cell statistic new_class u_hover u_color ">
			 				<div class="delta is-deceased">${tmp}</div>
			 				<div class="delta">${new_deceased}</div>
			 			</div>

			 			<div class="cell statistic new_class u_hover u_color ">
			 				<div class="delta is-active">${ot_val}</div>
			 			</div>

			 			<div class="cell statistic u_hover u_color  new_class hide_cell">
			 				<div class="delta ">${tested}</div>
			 			</div>

			 			<div class="cell statistic u_hover u_color  new_class hide_cell">
			 				<div class="delta is_vaccine">${new_vaccinated}</div>
			 				<div class="delta">${new_total_vaccinated1}</div>

			 			</div>

			 			<div class="cell statistic u_hover u_color  new_class hide_cell">
			 				<div class="delta is_vaccine">${new_fully_vaccine}</div>
			 				<div class="delta">${new_total_vaccinated2}</div>
			 			</div>

			 			<div class="cell statistic u_hover u_color  new_class hide_cell">
			 				<div class="delta is_vaccine">${new_vaccine_doese}</div>
			 				 <div class="delta ">${new_vaccine_dose_delta_2}</div>
			 			</div>

			 			<div class="cell statistic u_hover u_color  new_class hide_cell">
			 				<div class="delta">${value[10]}</div>
			 			</div>

			 			<div class="cell statistic u_hover new_class hide_cell u_color ">
			 				<div class="delta">${value[11]}</div>
			 			</div>

			 			<div class="cell statistic u_hover new_class hide_cell u_color ">
			 				<div class="delta">${new_population}</div>
			 			</div>
			 		</div>
	 			`	
			}
				}
			else {
					if(counter % 2 == 0){ 
					 	store = ` <div
						class="table_row "  onmouseover='first_hover("${name}")'>
						<div class="cell fixed dark_mode_cell" id
						= 'dropdown-menu'> <div class="state_name" id="table-first-value"
						value=''>${name}</div> </div>

						<div class="cell statistic u_color u_hover " id="hover-id">
							<div class="delta is-confirmed" id='id1' >${tmp}</div>
							<div class="delta" id='id1' >${new Intl.NumberFormat().format(confirmed)}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
							<div value=''>${recovered}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
						<div value='' class="delta is-recovered">${tmp}</div>
							<div class="delta">${new_recovered}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
							<div class="delta is-deceased">${tmp}</div>
							<div class="delta">${new_deceased}</div>
						</div>

						<div class="cell statistic u_color u_hover ">
							<div class="delta is-active">${new Intl.NumberFormat().format(other)}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta ">${tested}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta is_vaccine">${new_vaccinated}</div>
							<div class="delta">${new_total_vaccinated1}</div>

						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta is_vaccine">${new_fully_vaccine}</div>
							<div class="delta">${new_total_vaccinated2}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta is_vaccine">${new_vaccine_doese}</div>
							 <div class="delta ">${new_vaccine_dose_delta_2}</div>
						</div>	
								
						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta">${value[10]}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta">${value[11]}</div>
						</div>

						<div class="cell statistic u_color u_hover  hide_cell">
							<div class="delta">${new_population}</div>
						</div>
						</div>
					`
					}
					else {
						store = `
							<div class='table_row'  onmouseover='first_hover("${name}")'>
					 			<div class="cell fixed dark_mode_cell" id='row-first-id'>
					 				<div class="state_name" id="table-first-value" value=''>${name}</div>
					 		</div>

				 			<div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
				 				<div class="delta is-confirmed">${new_delta_confirmed}</div>
				 				<div class="delta">${new Intl.NumberFormat().format(confirmed)}</div>
				 			</div>

				 			<div class="cell statistic new_class u_hover u_color ligth_color ">
				 				<div>${recovered}</div>
				 			</div>

				 			<div class="cell statistic new_class u_hover u_color ">
				 				<div class="delta is-recovered">${new_delta_recovered}</div>
				 				<div class="delta">${new_recovered}</div>
				 			</div>

				 			<div class="cell statistic new_class u_hover u_color ">
				 				<div class="delta is-deceased">${new_delta_deceased}</div>
				 				<div class="delta">${new_deceased}</div>
				 			</div>

				 			<div class="cell statistic new_class u_hover u_color ">
				 				<div class="delta is-active">${new Intl.NumberFormat().format(other)}</div>
				 			</div>

				 			<div class="cell statistic u_hover u_color  new_class hide_cell">
				 				<div class="delta ">${tested}</div>
				 			</div>

				 			<div class="cell statistic u_hover u_color  new_class hide_cell">
				 				<div class="delta is_vaccine">${new_vaccinated}</div>
				 				<div class="delta">${new_total_vaccinated1}</div>

				 			</div>

				 			<div class="cell statistic u_hover u_color  new_class hide_cell">
				 				<div class="delta is_vaccine">${new_fully_vaccine}</div>
				 				<div class="delta">${new_total_vaccinated2}</div>
				 			</div>

				 			<div class="cell statistic u_hover u_color  new_class hide_cell">
				 				<div class="delta is_vaccine">${new_vaccine_doese}</div>
				 				 <div class="delta ">${new_vaccine_dose_delta_2}</div>
				 			</div>

				 			<div class="cell statistic u_hover u_color  new_class hide_cell">
				 				<div class="delta">${value[10]}</div>
				 			</div>

				 			<div class="cell statistic u_hover new_class hide_cell u_color ">
				 				<div class="delta">${value[11]}</div>
				 			</div>

				 			<div class="cell statistic u_hover new_class hide_cell u_color ">
				 				<div class="delta">${new_population}</div>
				 			</div>
				 		</div>
		 				`	
					}
			} 
			}
			else {
			 	var ot_val = 0
			 	if(other == undefined || other == NaN || other == '' || other == null || other == 'undefined'){
					if(counter % 2 == 0){
			  store = ` <div
					class="table_row "  onmouseover='first_hover("${name}")'> <div class="cell fixed dark_mode_cell" id
					= 'dropdown-menu'> <div class="state_name" id="table-first-value"
					value=''>${name}</div> </div>

					<div class="cell statistic u_color u_hover " id="hover-id">
						<div class="delta is-confirmed" id='id1' >${new_delta_confirmed}</div>
						<div class="delta" id='id1' >${new Intl.NumberFormat().format(confirmed)}</div>
					</div>

					<div class="cell statistic u_color u_hover ">
						
						<div value=''>${recovered}</div>
					</div>

					<div class="cell statistic u_color u_hover ">
					<div value='' class="delta is-recovered">${new_delta_recovered}</div>
						<div class="delta">${new_recovered}</div>
						
					</div>

					<div class="cell statistic u_color u_hover ">
						<div class="delta is-deceased">${new_delta_deceased}</div>
						<div class="delta">${new_deceased}</div>
						
					</div>
					<div class="cell statistic u_color u_hover ">
						<div class="delta is-active">${ot_val}</div>
						
					</div>
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta ">${tested}</div>
						
					</div>
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is_vaccine">${new_vaccinated}</div>
						<div class="delta">${new_total_vaccinated1}</div>

						
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is_vaccine">${new_fully_vaccine}</div>
						<div class="delta">${new_total_vaccinated2}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is_vaccine">${new_vaccine_doese}</div>
						 <div class="delta ">${new_vaccine_dose_delta_2}</div>
					</div>	
							
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta">${value[10]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta">${value[11]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta">${new_population}</div>
					</div>

				</div>
			`
			}
			else {
			store = `
				<div class='table_row'  onmouseover='first_hover("${name}")'>
		 			<div class="cell fixed dark_mode_cell" id='row-first-id'>
		 				<div class="state_name" id="table-first-value" value=''>${name}</div>
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
		 				<div class="delta is-confirmed">${new_delta_confirmed}</div>
		 				<div class="delta">${new Intl.NumberFormat().format(confirmed)}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ligth_color ">
		 				<div>${recovered}</div>
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-recovered">${new_delta_recovered}</div>
		 				<div class="delta">${new_recovered}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-deceased">${new_delta_deceased}</div>
		 				<div class="delta">${new_deceased}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-active">${ot_val}</div>
						
		 			</div>
		 			<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta ">${tested}</div>
					
		 		</div>
		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is_vaccine">${new_vaccinated}</div>
		 			<div class="delta">${new_total_vaccinated1}</div>

					
		 		</div>
		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is_vaccine">${new_fully_vaccine}</div>
		 			<div class="delta">${new_total_vaccinated2}</div>
		 		</div>

		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is_vaccine">${new_vaccine_doese}</div>
		 			 <div class="delta ">${new_vaccine_dose_delta_2}</div>
		 		</div>

		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta">${value[10]}</div>
		 		</div>

		 		<div class="cell statistic u_hover new_class hide_cell u_color ">
		 			<div class="delta">${value[11]}</div>
		 		</div>

		 		<div class="cell statistic u_hover new_class hide_cell u_color ">
		 			<div class="delta">${new_population}</div>
		 		</div>

		 		</div>
 			`	
			}
		}
		else {
		if(counter % 2 == 0){
			  store = ` <div
					class="table_row "  onmouseover='first_hover("$
					{name}")'> <div class="cell fixed dark_mode_cell" id
					= 'dropdown-menu'> <div class="state_name" id="table-first-value"
					value=''>${name}</div> </div>

					<div class="cell statistic u_color u_hover " id="hover-id">
						<div class="delta is-confirmed" id='id1' >${new_delta_confirmed}</div>
						<div class="delta" id='id1' >${new Intl.NumberFormat().format(confirmed)}</div>
						
					</div>

					<div class="cell statistic u_color u_hover ">
						
						<div value=''>${recovered}</div>
					</div>

					<div class="cell statistic u_color u_hover ">
					<div value='' class="delta is-recovered">${new_delta_recovered}</div>
						<div class="delta">${new_recovered}</div>
						
					</div>

					<div class="cell statistic u_color u_hover ">
						<div class="delta is-deceased">${new_delta_deceased}</div>
						<div class="delta">${new_deceased}</div>
						
					</div>
					<div class="cell statistic u_color u_hover ">
						<div class="delta is-active">${new Intl.NumberFormat().format(other)}</div>
						
					</div>
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta ">${tested}</div>
						
					</div>
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta  is_vaccine">${new_vaccinated}</div>
						<div class="delta">${new_total_vaccinated1}</div>

						
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is_vaccine">${new_fully_vaccine}</div>
						<div class="delta">${new_total_vaccinated2}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta is_vaccine">${new_vaccine_doese}</div>
						 <div class="delta ">${new_vaccine_dose_delta_2}</div>
					</div>	
							
					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta">${value[10]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta">${value[11]}</div>
					</div>

					<div class="cell statistic u_color u_hover  hide_cell">
						<div class="delta">${new_population}</div>
					</div>

				</div>
			`
		}
		else {
			store = `
				<div class='table_row'  onmouseover='first_hover("${name}")'>
		 			<div class="cell fixed dark_mode_cell" id='row-first-id'>
		 				<div class="state_name" id="table-first-value" value=''>${name}</div>
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
		 				<div class="delta is-confirmed">${new_delta_confirmed}</div>
		 				<div class="delta">${new Intl.NumberFormat().format(confirmed)}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ligth_color ">
		 				<div>${recovered}</div>
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-recovered">${new_delta_recovered}</div>
		 				<div class="delta">${new_recovered}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-deceased">${new_delta_deceased}</div>
		 				<div class="delta">${new_deceased}</div>
						
		 			</div>

		 			<div class="cell statistic new_class u_hover u_color ">
		 				<div class="delta is-active">${new Intl.NumberFormat().format(other)}</div>
						
		 			</div>
		 			<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta ">${tested}</div>
					
		 		</div>
		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is_vaccine">${new_vaccinated}</div>
		 			<div class="delta">${new_total_vaccinated1}</div>

					
		 		</div>
		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is_vaccine">${new_fully_vaccine}</div>
		 			<div class="delta">${new_total_vaccinated2}</div>
		 		</div>

		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta is_vaccine">${new_vaccine_doese}</div>
		 			 <div class="delta ">${new_vaccine_dose_delta_2}</div>
		 		</div>

		 		<div class="cell statistic u_hover u_color  new_class hide_cell">
		 			<div class="delta">${value[10]}</div>
		 		</div>

		 		<div class="cell statistic u_hover new_class hide_cell u_color ">
		 			<div class="delta">${value[11]}</div>
		 		</div>

		 		<div class="cell statistic u_hover new_class hide_cell u_color ">
		 			<div class="delta">${new_population}</div>
		 		</div>

		 		</div>
 			`	
		}

		}


}

	newdata += store;

	counter = counter + 1;

	total_confirmed += confirmed;
	total_recovered += recovered
	total_deceased += deceased
	total_active += active


	delta_confirmed_total = delta_confirmed_total + delta_confirmed
	delta_recovered_total = delta_recovered_total + delta_recovered
	delta_deceased_total = delta_deceased_total + delta_deceased
	
	}



	document.getElementById("cell").innerHTML = newdata;

	// show total delta7 value
	document.getElementById('recovered').innerHTML = '+' + new Intl.NumberFormat().format(delta_recovered_total);
	document.getElementById('h4-data').innerHTML = '+' + new Intl.NumberFormat().format(delta_confirmed_total);
	// document.getElementById('deceased').innerHTML = '+' + delta_deceased_total;



// show total value
	document.getElementById('total-confirmed').innerHTML =new Intl.NumberFormat().format(total_confirmed);
	document.getElementById('total-deceased').innerHTML = new Intl.NumberFormat().format(total_deceased) ;
	document.getElementById('total-recovered').innerHTML = new Intl.NumberFormat().format(total_recovered);

}

async function render() {
	await getData()
}

render()



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
	
});







document.getElementById('menu').addEventListener('click', (()=> {
	document.getElementById('hover-show').classList.toggle('new_menu');	

	
	if( document.getElementById('check-menu').innerHTML == 'Menu'){
		 document.getElementById('check-menu').innerHTML = 'Close'
	}
	else {
		 document.getElementById('check-menu').innerHTML = 'Menu'
	}

}));


document.getElementById('themes-second').addEventListener('click', (() => {
	document.body.classList.toggle('dark_mode');

	if (document.body.classList.contains('dark_mode')) {
		let svg_image = document.getElementById('themes-second');
		svg_image.innerHTML = `<svg
		xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
		fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
		stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21
		12.79z"></path></svg>`
	}

	else {
		let svg_image = document.getElementById('themes-second');
		svg_image.innerHTML = `<svg
		xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0
		24 24"  fill="none" stroke="#ffc107" stroke-width="2"
		stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12"
		r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line
		x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22"
		x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78"
		y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line
		x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78"
		x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78"
		y2="4.22"></line></svg>` 
	}

}));



function state_click() {
	var table_row = document.getElementsByClassName('table_row')
	for(let i = 1 ; i < table_row.length; i++){
		let d = parseInt(table_row[i].innerText.split('\n')[1])
		console.log(d)
	}

}







// icon Details

document.getElementById('detail_id').addEventListener('click', (()=> {
	var icon_details = document.getElementById('fourth-table-icon-details')
	icon_details.classList.toggle('new_fourth_table_icon_details');
}))



