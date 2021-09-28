field = ["delta21_14", "delta7", "districts", "meta", "total", "delta"];
filed_item = ["other"];

filed_delta = ['confirmed', 'recovered', 'deceased', 'other', 'tested', 'vaccinated1', 'vaccinated2'];
// filed_delta_check_val = ['confirmed', 'recovered', 'deceased', 'other', 'tested', 'vaccinated1', 'vaccinated2'];

html_element_counter = 0
document.getElementById('main-table').innerHTML = '';
function tableSorting(val, teg) {
    console.log(val, teg)
    html_data = "";

    request = new XMLHttpRequest();
    var url = "https://data.covid19india.org/v4/min/data.min.json";

    request.open("GET", url)
    request.send();

    request.onreadystatechange = function() {

        if (request.readyState == 4 && request.status == 200) {

            var jsonData = JSON.parse(request.responseText)
            html_element = document.getElementById('main-table');

            var arrayData = Object.entries(jsonData)
            arrayData.sort((a, b) => a[1][teg][val] - b[1][teg][val])

            arrayData.forEach((item) => {

                var allItems = item[1]
                var allItemsName = item[0]

                var allItemsTotal = allItems['total']
                var allItemsDelta = allItems['delta']
                // console.log(allItemsDelta)
                var allItemsMeta = allItems['meta']
                var allItemsDeltaData = allItems['delta']

                let difference = field.filter(x => !Object.keys(allItems).includes(x));
                allItems = difference.reduce((a, v) => ({
                    ...a,
                    [v]: ""
                }), allItems);

                var findOther = allItemsTotal
                var diff = filed_item.filter(i => !Object.keys(findOther).includes(i));
                var findOther = diff.reduce((j, d) => ({
                    ...j,
                    [d]: 0
                }), findOther)

                var findDalta = allItems['delta']
                var deltaData = filed_delta.filter(c => !Object.keys(findDalta).includes(c));
                var findDalta = deltaData.reduce((k, z) => ({
                    ...k,
                    [z]: ''
                }), findDalta)

                console.log(findDalta)
                var findDaltaData = allItems['delta']
                var deltaData_confirmed = filed_delta.filter(b => !Object.keys(findDaltaData).includes(b));
                var findDaltaData = deltaData_confirmed.reduce((g, f) => ({
                    ...g,
                    [f]: ''
                }), findDaltaData)

                if (html_element_counter % 2 == 0) {

                    html_element = `
                        <div class='table_row'  onmouseover='first_hover("${allItemsName}")'>

                            <div class="cell fixed dark_mode_cell" id='row-first-id'>
                              <div class="state_name" id="table-first-value" value=''>${allItemsName}</div>
                            </div>

                            <div class="cell statistic u_hover u_color " id="hover-id">
                              <div class="delta is-confirmed  u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.confirmed)}</div> 
                              <div class="delta" id="table-first-value">${new Intl.NumberFormat().format(allItemsTotal.confirmed)}</div> 
                            </div>

                            <div class="cell statistic u_hover u_color  ">
                              <div>${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color ">
                              <div class="delta is-recovered u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.recovered)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                 
                            </div>

                            <div class="cell statistic u_hover u_color ">
                              <div class="delta is-deceased u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.deceased)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.deceased)}</div>
                 
                            </div>

                            <div class="cell statistic u_hover u_color ">
                              <div class="delta is-active u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.other)}</div>
                              <div class="delta ">${new Intl.NumberFormat().format(findOther.other)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is-tested u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.tested)}</div>
                              <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.tested)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is_vaccine u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.vaccinated1)}</div>
                              <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.vaccinated1)}</div>
                  
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is_vaccine u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.vaccinated2)}</div>
                              <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.vaccinated2)}</div>
                
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is_vaccine">${new Intl.NumberFormat().format(allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                            <div class="delta">😈</div>
                            </div>

                            <div class="cell statistic u_hover hide_cell u_color ">
                              <div class="delta">😈</div>
                            </div>

                            <div class="cell statistic u_hover hide_cell u_color ">
                              <div class="delta">${new Intl.NumberFormat().format(allItemsMeta.population)}</div>
                            </div>

                        </div>
                    `
                } else {
                    html_element = `
                        <div class='table_row' onmouseover='first_hover("${allItemsName}")'>

                          <div class="cell fixed dark_mode_cell" id='row-first-id'>
                            <div class="state_name" id="table-first-value" value=''>${allItemsName}</div>
                          </div>

                          <div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
                            <div class="delta is-confirmed" id="data-confirmed u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.confirmed)}</div>
                            <div class="delta" id="data-confirmed">${new Intl.NumberFormat().format(allItemsTotal.confirmed)}</div>
                          </div>

                        <div class="cell statistic new_class u_hover u_color ligth_color ">
                          <div>${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                        </div>

                        <div class="cell statistic new_class u_hover u_color ">
                          <div class="delta is-recovered u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.recovered)}</div>
                          <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                        </div>

                        <div class="cell statistic new_class u_hover u_color ">
                          <div class="delta is-deceased u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.deceased)}</div>
                          <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.deceased)}</div>
            
                        </div>
                        <div class="cell statistic new_class u_hover u_color ">
                        <div class="delta is-active u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.other)}</div>
                          <div class="delta">${new Intl.NumberFormat().format(findOther.other)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is-tested u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.tested)}</div>
                          <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.tested)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is_vaccine u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.vaccinated1)}</div>
                          <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.vaccinated1)}</div>
              
                        </div>
                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is_vaccine u_table_padding u_font_size">${new Intl.NumberFormat().format(findDalta.vaccinated2)}</div>
                          <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.vaccinated2)}</div>
              
                        </div>
                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is_vaccine">${new Intl.NumberFormat().format(allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2)}</div>
               
                        </div>
                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta">😈</div>
                        </div>

                        <div class="cell statistic u_hover new_class hide_cell u_color ">
                          <div class="delta">😈</div>
                        </div>

                        <div class="cell statistic u_hover new_class hide_cell u_color ">
                          <div class="delta">${new Intl.NumberFormat().format(allItemsMeta.population)}</div>
                        </div>
                      </div>
                    `
                }

                html_data += html_element;
                html_element_counter += 1;
            });

            document.getElementById('main-table').innerHTML = html_data;
        };
    };
};
                    // Table Events
 
document.getElementById('right-arrow').addEventListener('click', right_arrow);

function right_arrow() {
    var right_arrow = document.getElementById('right-arrow');
    var table = document.getElementById('table-container');
    var hide_cell = document.getElementsByClassName('hide_cell');
    var main_hero_section = document.getElementById('hero');
    var hero_container = document.getElementById('hero-container');
    var state_selection = document.getElementById('state-selection');
    var searchbox = document.getElementById('searchbox');
    var panel = document.getElementById('panel');
    var map_swicher = document.getElementById('map-swicher');
    
    if (right_arrow.classList.contains('right_arrow')) {

        right_arrow.classList.remove('right_arrow');
        right_arrow.classList.add('new_right_arrow');

        for (var i of hide_cell) {
            i.classList.add('show');
        }

        table.classList.remove('table_row');
        table.classList.add('click_table');

        hero_container.classList.remove('hero_container');
        hero_container.classList.add('hero_new_container');

        main_hero_section.classList.remove('hero')
        main_hero_section.classList.add('new_hero');

        state_selection.classList.remove('state_selection');
        state_selection.classList.add('state_new_selection');

        searchbox.classList.remove('searchbox');
        searchbox.classList.add('searchbox_new');

        panel.classList.remove('action_panel');
        panel.classList.add('action_new_panel');

        map_swicher.classList.remove('map_switcher');
        map_swicher.classList.add('map_new_switcher');

    }
     else {
        right_arrow.classList.remove('new_right_arrow');
        right_arrow.classList.add('right_arrow');

        for (var i of hide_cell) {
            i.classList.remove('show');
        }

        table.classList.remove('click_table');
        table.classList.add('table_row');


        hero_container.classList.add('hero_container');
        hero_container.classList.remove('hero_new_container');

        main_hero_section.classList.remove('new_hero');
        main_hero_section.classList.add('hero')

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


// Click to Dark mode on Body

document.getElementById('themes').addEventListener('click', () => {
    document.body.classList.toggle('dark_mode')
    if (document.body.classList.contains('dark_mode')) {

        document.getElementById('themes').innerHTML = `<svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
        stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21
        12.79z"></path></svg>`;
    }
     else {

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


function first_hover(val){
  document.getElementById('select-dropdown').value = val;
}

