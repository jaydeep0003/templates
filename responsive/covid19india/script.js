fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(data => {
  

    html_element = document.getElementById('main-table')

    for(let key of Object.keys(data)){
      let data_of_delta = data[key].delta;
      
      if (data_of_delta == undefined ) {
        data_of_delta = ""
      }

      else 
      {
        
        data_of_delta = data[key].delta;
        console.log(data_of_delta);
        var x = data_of_delta.recovered ? 'undefined' :data_of_delta.recovered;

      }


    // html_element = `
    //   <div class='table_row'  onmouseover='first_hover("${name}")'>

    //     <div class="cell fixed dark_mode_cell" id='row-first-id'>
    //       <div class="state_name" id="table-first-value" value=''>${name}</div>
    //     </div>

    //     <div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
    //       <div class="delta is-confirmed">${new_delta_confirmed}</div>
    //       <div class="delta">${new Intl.NumberFormat().format(confirmed)}</div>
    //     </div>

    //     <div class="cell statistic new_class u_hover u_color ligth_color ">
    //       <div>${recovered}</div>
    //     </div>

    //     <div class="cell statistic new_class u_hover u_color ">
    //       <div class="delta is-recovered">${new_delta_recovered}</div>
    //       <div class="delta">${new_recovered}</div>
    //     </div>

    //     <div class="cell statistic new_class u_hover u_color ">
    //       <div class="delta is-deceased">${tmp}</div>
    //       <div class="delta">${new_deceased}</div>
    //     </div>

    //     <div class="cell statistic new_class u_hover u_color ">
    //       <div class="delta is-active">${ot_val}</div>
    //     </div>

    //     <div class="cell statistic u_hover u_color  new_class hide_cell">
    //       <div class="delta ">${tested}</div>
    //     </div>

    //     <div class="cell statistic u_hover u_color  new_class hide_cell">
    //       <div class="delta is_vaccine">${new_vaccinated}</div>
    //       <div class="delta">${new_total_vaccinated1}</div>
    //     </div>

    //     <div class="cell statistic u_hover u_color  new_class hide_cell">
    //       <div class="delta is_vaccine">${new_fully_vaccine}</div>
    //       <div class="delta">${new_total_vaccinated2}</div>
    //     </div>

    //     <div class="cell statistic u_hover u_color  new_class hide_cell">
    //       <div class="delta is_vaccine">${new_vaccine_doese}</div>
    //        <div class="delta ">${new_vaccine_dose_delta_2}</div>
    //     </div>

    //     <div class="cell statistic u_hover u_color  new_class hide_cell">
    //       <div class="delta">${value[10]}</div>
    //     </div>

    //     <div class="cell statistic u_hover new_class hide_cell u_color ">
    //       <div class="delta">${value[11]}</div>
    //     </div>

    //     <div class="cell statistic u_hover new_class hide_cell u_color ">
    //       <div class="delta">${new_population}</div>
    //     </div>

    //   </div>
    // `

    }


});






