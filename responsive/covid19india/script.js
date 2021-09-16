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
    var state_selection = document.getElementById('state-selection');

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

        state_selection.classList.remove('state_selection');
        state_selection.classList.add('state_new_selection');


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

        state_selection.classList.add('state_selection');
        state_selection.classList.remove('state_new_selection');

    }

  }

  // Click to Dark mode on Body

  document.getElementById('themes').addEventListener('click', () => {

    document.body.classList.toggle('dark_mode')


    if (document.body.classList.contains('dark_mode')) {

        document.getElementById('themes').innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21
        12.79z"></path></svg>`
    } else {

        document.getElementById('themes').innerHTML = `<svg 
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="#ffc107" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12"
        y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36"
        y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12"
        x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64"
        x2="19.78" y2="4.22"></line></svg>`

    }

  });



  // icon Details

  document.getElementById('detail_id').addEventListener('click', (()=> {
    var icon_details = document.getElementById('fourth-table-icon-details')
    var detail_id = document.getElementById('detail_id')
    detail_id.classList.toggle('new_detail_id')
    icon_details.classList.toggle('new_fourth_table_icon_details');

    var i = 0;

    function change() {
      let doc =  document.getElementById('details-effect');
      var color = ["#007bff", "rgba(32,26,162,.8666666666666667)", "#ff073a", "#28a745", "#6c757d"];
      doc.style.color = color[i];
      i = (i + 1) % color.length;
    };

    setInterval(change, 1500);

}));













// place Holder




});
