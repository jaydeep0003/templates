field = ["delta21_14", "delta7", "districts", "meta", "total", "delta"]
filed_item = ["other"]

html_data = "";
html_element_counter = 0
fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(data => {


    html_element = document.getElementById('main-table');

    for (var [state, state_data] of Object.entries(data)) {

        let difference = field.filter(x => !Object.keys(state_data).includes(x));
        state_data = difference.reduce((a, v) => ({ ...a, [v]: ""}), state_data);
        
        var a = data[state].total
        var diff = filed_item.filter(i => !Object.keys(a).includes(i));
        var a = diff.reduce((j, d) => ({ ...j, [d]: 0}), a)
        
        console.log(state,state_data)
        
        if (html_element_counter % 2 == 0) {

    html_element = `
                      <div class='table_row'>

                        <div class="cell fixed dark_mode_cell" id='row-first-id'>
                          <div class="state_name" id="table-first-value" value=''>${state}</div>
                        </div>

                        <div class="cell statistic u_hover u_color " id="hover-id">
                          <div class="delta is-confirmed">${new Intl.NumberFormat().format(state_data.total.confirmed)}</div>
                          
                        </div>

                        <div class="cell statistic u_hover u_color  ">
                          <div>${new Intl.NumberFormat().format(state_data.total.confirmed)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color ">
                          <div class="delta is-recovered">${new Intl.NumberFormat().format(state_data.total.recovered)}</div>
                         
                        </div>

                        <div class="cell statistic u_hover u_color ">
                          <div class="delta is-deceased">${new Intl.NumberFormat().format(state_data.total.deceased)}</div>
                         
                        </div>

                        <div class="cell statistic u_hover u_color ">
                          <div class="delta is-active">${new Intl.NumberFormat().format(a.other)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color  hide_cell">
                          <div class="delta ">${new Intl.NumberFormat().format(state_data.total.tested)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color  hide_cell">
                          <div class="delta is_vaccine">${new Intl.NumberFormat().format(state_data.total.vaccinated1)}</div>
                          
                        </div>

                        <div class="cell statistic u_hover u_color  hide_cell">
                          <div class="delta is_vaccine">${new Intl.NumberFormat().format(state_data.total.vaccinated2)}</div>
                        
                        </div>

                        <div class="cell statistic u_hover u_color  hide_cell">
                          <div class="delta is_vaccine">${new Intl.NumberFormat().format(state_data.total.vaccinated1 + state_data.total.vaccinated2)}</div>
                          
                        </div>

                        <div class="cell statistic u_hover u_color  hide_cell">
                       
                        </div>

                        <div class="cell statistic u_hover hide_cell u_color ">
                          <div class="delta"></div>
                        </div>

                        <div class="cell statistic u_hover hide_cell u_color ">
                          <div class="delta">${new Intl.NumberFormat().format(state_data.meta.population)}</div>
                        </div>

                      </div>
                    `
} else {
    html_element = `
                    <div class='table_row'>
                      <div class="cell fixed dark_mode_cell" id='row-first-id'>
                        <div class="state_name" id="table-first-value" value=''>${state}</div>
                    </div>
                    <div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
                      
                      <div class="delta is-confirmed">${new Intl.NumberFormat().format(state_data.total.confirmed)}</div>
                    </div>
                    <div class="cell statistic new_class u_hover u_color ligth_color ">
                      <div>${new Intl.NumberFormat().format(state_data.total.recovered)}</div>
                    </div>
                    <div class="cell statistic new_class u_hover u_color ">
                      <div class="delta is-recovered">${new Intl.NumberFormat().format(state_data.total.recovered)}</div>
                    </div>

                    <div class="cell statistic new_class u_hover u_color ">
                      <div class="delta is-deceased">${new Intl.NumberFormat().format(state_data.total.deceased)}</div>
                    
                    </div>
                    <div class="cell statistic new_class u_hover u_color ">
                      <div class="delta is-active">${new Intl.NumberFormat().format(a.other)}</div>
                    </div>
                    <div class="cell statistic u_hover u_color  new_class hide_cell">
                      <div class="delta ">${new Intl.NumberFormat().format(state_data.total.tested)}</div>
                    </div>
                    <div class="cell statistic u_hover u_color  new_class hide_cell">
                      <div class="delta is_vaccine">${new Intl.NumberFormat().format(state_data.total.vaccinated1)}</div>
                      
                    </div>
                    <div class="cell statistic u_hover u_color  new_class hide_cell">
                      <div class="delta is_vaccine">${new Intl.NumberFormat().format(state_data.total.vaccinated2)}</div>
                      
                    </div>
                    <div class="cell statistic u_hover u_color  new_class hide_cell">
                      <div class="delta is_vaccine">${new Intl.NumberFormat().format(state_data.total.vaccinated1 + state_data.total.vaccinated2)}</div>
                       
                    </div>
                    <div class="cell statistic u_hover u_color  new_class hide_cell">
                      <div class="delta"></div>
                    </div>
                    <div class="cell statistic u_hover new_class hide_cell u_color ">
                      <div class="delta"></div>
                    </div>
                    <div class="cell statistic u_hover new_class hide_cell u_color ">
                      <div class="delta">${new Intl.NumberFormat().format(state_data.meta.population)}</div>
                    </div>
                  </div>
                `
}

        html_data += html_element;
        html_element_counter += 1;

    }

    document.getElementById('main-table').innerHTML = html_data;
                    
                    // Table Events
    document.getElementById('right-arrow').addEventListener('click', right_arrow);

   function right_arrow() {
    var right_arrow = document.getElementById('right-arrow');
    var table = document.getElementById('table-container');
    var hide_cell = document.getElementsByClassName('hide_cell');
    var main_hero_section = document.getElementById('hero');
    if (right_arrow.classList.contains('right_arrow')) {

        right_arrow.classList.remove('right_arrow');
        right_arrow.classList.add('new_right_arrow');

        for (var i of hide_cell) {
            i.classList.add('show');
        }

        table.classList.remove('table_row');
        table.classList.add('click_table');

        main_hero_section.classList.remove('hero')
        main_hero_section.classList.add('new_hero');


    } else {
        right_arrow.classList.remove('new_right_arrow');
        right_arrow.classList.add('right_arrow');

        for (var i of hide_cell) {
            i.classList.remove('show');
        }

        table.classList.remove('click_table');
        table.classList.add('table_row');

        main_hero_section.classList.remove('new_hero');
        main_hero_section.classList.add('hero')

    }

  }
