field = ["delta21_14", "delta7", "districts", "meta", "total", "delta"]
total_of_filed = ["confirmed", "deceased", "recovered", "tested", "vaccinated1", "vaccinated2"]

html_data = "";
fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(data => {


    html_element = document.getElementById('main-table');

    for (var [state, state_data] of Object.entries(data)) {
        let difference = field.filter(x => !Object.keys(state_data).includes(x));
        state_data = difference.reduce((a, v) => ({ ...a, [v]: ""}), state_data)

        


        html_element = `
          <div class='table_row'>

            <div class="cell fixed dark_mode_cell" id='row-first-id'>
              <div class="state_name" id="table-first-value" value=''>${state}</div>
            </div>

            <div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
              <div class="delta is-confirmed">${state_data.total.confirmed}</div>
              
            </div>

            <div class="cell statistic new_class u_hover u_color ligth_color ">
              <div>${state_data.total.recovered}</div>
            </div>

            <div class="cell statistic new_class u_hover u_color ">
              <div class="delta is-recovered">${state_data.total.recovered}</div>
             
            </div>

            <div class="cell statistic new_class u_hover u_color ">
              <div class="delta is-deceased">${state_data.total.deceased}</div>
             
            </div>

            <div class="cell statistic new_class u_hover u_color ">
              <div class="delta is-active">${state_data.total.other}</div>
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta ">${state_data.total.tasted}</div>
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta is_vaccine"></div>
              
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta is_vaccine"></div>
            
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
              <div class="delta is_vaccine"></div>
              
            </div>

            <div class="cell statistic u_hover u_color  new_class hide_cell">
           
            </div>

            <div class="cell statistic u_hover new_class hide_cell u_color ">
              <div class="delta"></div>
            </div>

            <div class="cell statistic u_hover new_class hide_cell u_color ">
              <div class="delta"></div>
            </div>

          </div>
        `

        html_data += html_element;

    }
    document.getElementById('main-table').innerHTML = html_data;

});








