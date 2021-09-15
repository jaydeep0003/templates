fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(data => {
  

    html_element = document.getElementById('main-table');

    html_data = "";

    for(let key of Object.keys(data)){

      let data_of_delta = data[key].delta;
      let data_of_meta = data[key].meta;
      let data_of_total = data[key].total


      // console.log(key)
      if (data_of_delta == undefined ) {
        data_of_delta = ""

      }

       // console.log(key)
        html_element = `
          <div class='table_row'  onmouseover='first_hover("${key}")'>

            <div class="cell fixed dark_mode_cell" id='row-first-id'>
              <div class="state_name" id="table-first-value" value=''>${key}</div>
            </div>

            <div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
              <div class="delta is-confirmed">${data_of_delta.confirmed}</div>
              
            </div>

            <div class="cell statistic new_class u_hover u_color ligth_color ">
              <div>${active}</div>
            </div>

            <div class="cell statistic new_class u_hover u_color ">
              <div class="delta is-recovered">${data_of_delta.recovered}</div>
             
            </div>

            <div class="cell statistic new_class u_hover u_color ">
              <div class="delta is-deceased">${data_of_delta.deceased}</div>
             
            </div>

            <div class="cell statistic new_class u_hover u_color ">
              <div class="delta is-active">${data_of_total.other}</div>
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta ">${data_of_total.tested}</div>
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta is_vaccine">${data_of_delta.vaccinated1}</div>
              
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta is_vaccine">${data_of_delta.vaccinated2}</div>
            
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta is_vaccine">${data_of_meta.population}</div>
              
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
           
            </div>

            <div class="cell statistic u_hover new_class hide_cell u_color ">
              <div class="delta">${data_of_meta.population}</div>
            </div>

            <div class="cell statistic u_hover new_class hide_cell u_color ">
              <div class="delta">${data_of_meta.population}</div>
            </div>

          </div>
        `
      
      html_data += html_element;
    }




  document.getElementById('main-table').innerHTML = html_data;
});








