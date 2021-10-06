// import { STATE_NAMES } from "./state.js";


// import { typeWriter} from './placeholder.js'


localStorage.setItem('order', 'asc')

filed_delta = ['confirmed', 'recovered', 'deceased', 'other', 'tested', 'vaccinated1', 'vaccinated2'];



html_element_counter = 0
let total_confirmed = total_recovered = total_deceased = total_active  = delta_confirmed = delta_recovered = delta_deceased = vacc1 = 0

document.getElementById('main-table').innerHTML = '';

var longPress;

function tableSorting(val, tag) {
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

            arrayData.filter((value) => typeof (value[1]?.delta == undefined ? value[1].delta = '' : value[1].delta ))
            arrayData.filter((value) => value[1].total.other = value[1].total.other == undefined ? '0' : value[1].total.other)
            arrayData.filter((value) => value[1].delta.confirmed = value[1].delta.confirmed ===  undefined ? 0 : value[1].delta.confirmed)
            arrayData.filter((value) => value[1].delta.recovered = value[1].delta.recovered == undefined ? 0 : value[1].delta.recovered)
            arrayData.filter((value) => value[1].delta.deceased = value[1].delta.deceased == undefined ? 0 : value[1].delta.deceased)



            // if (val == 'state') {
            //     if(localStorage.getItem("order") == "asc"){
            //         arrayData.sort();
            //         localStorage.setItem("order", "")
            //     }
            //     else{
            //         arrayData.reverse();
            //         localStorage.setItem('order', 'asc')
            //     }
            // }

            // else {

            //     if (localStorage.getItem('order') == 'asc') {
            //         arrayData.sort((a, b) => a[1][tag][val] > b[1][tag][val])  
            //         localStorage.setItem('order', '')
            //     }

            //     else {
            //         arrayData.sort((a,b) => {
                        
            //             if(a[0] =='TT' ){
            //                return a[1][tag][val] > a[1][tag][val]
            //             }

            //             else {
            //                 return a[1][tag][val] < b[1][tag][val]
            //             }
            //         })

            //         localStorage.setItem('order', 'asc')
            //     }
            // }

                    
            








            

            if (val == 'state') {
                if(localStorage.getItem("order") == "asc")
                {
                    arrayData.sort();
                    localStorage.setItem("order", "")
                }
                else
                {
                    arrayData.reverse();
                    localStorage.setItem('order', 'asc')
                }
            }

            else {

                if (localStorage.getItem('order') == 'asc') {
                    arrayData.sort((a, b) => a[1][tag][val] > b[1][tag][val])

                    localStorage.setItem('order', '')
                }

                else {
                    arrayData.sort((a, b) => a[1][tag][val] < b[1][tag][val])
                    localStorage.setItem('order', 'asc')
                }
            }


            // longPress = setTimeout( 
            //     function() {
            //         arrayData.sort((a, b) => a[1].delta.recovered - b[1].delta.recovered)
            //     }

            // ,1000)

            arrayData.forEach((item) => {

                var allItems = item[1]
                var allItemsTotal = allItems['total']
                var allItemsDelta = allItems['delta']
                var allItemsMeta = allItems['meta']
                var findDalta = allItems['delta']


                

                function convertNumber(number){
                    if (number > 999 && number < 100000) {
                        return (number/1000).toFixed(1) + 'K'
                    }

                    else if(number >= 100000 && number < 9999999) {
                        return (number/100000).toFixed(1) + 'L'
                    }

                    else if(number >= 10000000) {
                        return (number/10000000).toFixed(1) + 'Cr'
                    }
                    else if(number < 999) {
                        return number
                    }
                }

                



                var deltaData = filed_delta.filter(c => !Object.keys(findDalta).includes(c));
                var findDalta = deltaData.reduce((k, z) => ({...k,[z]: ''}), findDalta)



               


                if (html_element_counter % 2 == 0) {
                    html_element = `
                        <div class='table_row'  onmouseover='first_hover("${item[0]}")'>

                            <div class="cell fixed dark_mode_cell" id='row-first-id'>
                              <div class="state_name" id="table-first-value" value=''>${item[0]}</div>
                            </div>

                            <div class="cell statistic u_hover u_color " id="hover-id">
                              <div class="delta is-confirmed  u_table_padding u_font_size">${findDalta.confirmed}</div> 
                              <div class="delta" id="table-first-value">${new Intl.NumberFormat().format(allItemsTotal.confirmed)}</div> 
                            </div>

                            <div class="cell statistic u_hover u_color">
                              <div>${new Intl.NumberFormat().format(allItemsTotal.confirmed-allItemsTotal.recovered-allItemsTotal.deceased - allItemsTotal.other)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color">
                              <div class="delta is-recovered u_table_padding u_font_size">${(findDalta.recovered)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                 
                            </div>

                            <div class="cell statistic u_hover u_color">
                              <div class="delta is-deceased u_table_padding u_font_size">${(findDalta.deceased)}</div>
                              <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.deceased)}</div>
                 
                            </div>

                            <div class="cell statistic u_hover u_color">
                              <div class="delta is-active u_table_padding u_font_size">${(findDalta.other)}</div>
                              <div class="delta ">${(allItemsTotal.other)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is-tested u_table_padding u_font_size">${(findDalta.tested)}</div>
                              <div class="delta ">${convertNumber(allItemsTotal.tested)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated1)}</div>
                              <div class="delta ">${convertNumber(allItemsTotal.vaccinated1)}</div>
                  
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated2)}</div>
                              <div class="delta ">${convertNumber(allItemsTotal.vaccinated2)}</div>
                
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                              <div class="delta ">${convertNumber(allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2)}</div>
                            </div>

                            <div class="cell statistic u_hover u_color  hide_cell">
                            <div class="delta">😈</div>
                            </div>

                            <div class="cell statistic u_hover hide_cell u_color ">
                              <div class="delta">😈</div>
                            </div>

                            <div class="cell statistic u_hover hide_cell u_color ">
                              <div class="delta">${convertNumber(allItemsMeta.population)}</div>
                            </div>

                        </div>
                    `
                } else {
                    html_element = `
                        <div class='table_row' onmouseover='first_hover("${item[0]}")'>

                          <div class="cell fixed dark_mode_cell" id='row-first-id'>
                            <div class="state_name" id="table-first-value" value=''>${item[0]}</div>
                          </div>

                          <div class="cell statistic new_class u_hover u_color ligth_color" id="hover-id">
                            <div class="delta is-confirmed" id="data-confirmed u_table_padding u_font_size">${(findDalta.confirmed)}</div>
                            <div class="delta" id="data-confirmed">${new Intl.NumberFormat().format(allItemsTotal.confirmed)}</div>
                          </div>

                        <div class="cell statistic new_class u_hover u_color ligth_color ">
                          <div>${new Intl.NumberFormat().format(allItemsTotal.confirmed - allItemsTotal.recovered - allItemsTotal.deceased - allItemsTotal.other)}</div>
                        </div>

                        <div class="cell statistic new_class u_hover u_color ">
                          <div class="delta is-recovered u_table_padding u_font_size">${(findDalta.recovered)}</div>
                          <div class="delta ">${new Intl.NumberFormat().format(allItemsTotal.recovered)}</div>
                        </div>

                        <div class="cell statistic new_class u_hover u_color ">
                          <div class="delta is-deceased u_table_padding u_font_size">${(findDalta.deceased)}</div>
                          <div class="delta">${new Intl.NumberFormat().format(allItemsTotal.deceased)}</div>
            
                        </div>
                        <div class="cell statistic new_class u_hover u_color ">
                        <div class="delta is-active u_table_padding u_font_size">${(findDalta.other)}</div>
                          <div class="delta">${(allItemsTotal.other)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is-tested u_table_padding u_font_size">${(findDalta.tested)}</div>
                          <div class="delta ">${convertNumber(allItemsTotal.tested)}</div>
                        </div>

                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated1)}</div>
                          <div class="delta ">${convertNumber(allItemsTotal.vaccinated1)}</div>
              
                        </div>
                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta is_vaccine u_table_padding u_font_size">${(findDalta.vaccinated2)}</div>
                          <div class="delta ">${convertNumber(allItemsTotal.vaccinated2)}</div>
              
                        </div>
                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta ">${convertNumber(allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2)}</div>
               
                        </div>
                        <div class="cell statistic u_hover u_color  new_class hide_cell">
                          <div class="delta">😈</div>
                        </div>

                        <div class="cell statistic u_hover new_class hide_cell u_color ">
                          <div class="delta">😈</div>
                        </div>

                        <div class="cell statistic u_hover new_class hide_cell u_color ">
                          <div class="delta">${convertNumber(allItemsMeta.population)}</div>
                        </div>
                      </div>
                    `
                }


                html_data += html_element;
                html_element_counter += 1;
                total_confirmed += allItemsTotal.confirmed/2;
                total_recovered += allItemsTotal.recovered/2;
                total_deceased = allItemsTotal.deceased;
                total_active = allItemsTotal.confirmed - allItemsTotal.recovered - allItemsTotal.deceased - allItemsTotal.other;
                delta_confirmed += findDalta.confirmed/2;
                delta_recovered += findDalta.recovered/2;
                delta_deceased += findDalta.deceased/2;
                administered = allItemsTotal.vaccinated1 + allItemsTotal.vaccinated2;

                vacc1 = allItemsTotal.vaccinated1*100/allItemsMeta.population;
                vacc2 = allItemsTotal.vaccinated2*100/allItemsMeta.population;
            });
                            
            num = vacc1.toString();
            var x = Number(num.slice(0,5));

            num2 = vacc2.toString();
            var y = Number(num2.slice(0,5));
            
            document.getElementById('h4-data').innerHTML = delta_confirmed.toLocaleString();
            document.getElementById('recovered').innerHTML = delta_recovered.toLocaleString();
            document.getElementById('deceased').innerHTML = delta_deceased.toLocaleString();
            document.getElementById('administered').innerHTML = administered.toLocaleString();

            document.getElementById('progress-total-value').innerHTML =x + '%'
            document.getElementById('progress-highlight-value').innerHTML = y + '%'

            document.getElementById('progress-width').style.width = x + '%';
            document.getElementById('progress-highlight').style.width = y + '%';
            document.getElementById('progress-highlight-width').style.marginLeft = y + '%';
            
            // document.getElementById('progress-total-value').style.marginLeft = y + '%';
            
            document.getElementById('main-table').innerHTML = html_data;
            
            function animateValue(obj, start, end, duration) {
                let startTimestamp = null;
                const step = (timestamp) => {
                if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    obj.innerHTML = Math.floor(progress * (start - end) + 0);
                    if (progress < 1) {
                      window.requestAnimationFrame(step);
                    }
                };
                window.requestAnimationFrame(step);
            }

            const tt_confirmed = document.getElementById("total-confirmed")
            const tt_recovered = document.getElementById('total-recovered')
            const tt_desceased = document.getElementById('total-deceased')
            const tt_active = document.getElementById('total-active')


            animateValue(tt_confirmed, total_confirmed, 0, 1500);
            animateValue(tt_recovered, total_recovered, 0, 1500);
            animateValue(tt_desceased, total_deceased, 0, 1500);
            animateValue(tt_active, total_active, 0, 2500);            
        };
    };

};
 


 // clear Function
function clearFunction() {
    clearTimeout(longPress)
}

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
    var progress_width = document.getElementById('progress-width');
    var progress_bar = document.getElementById('progress-bar');
    
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

        progress_width.classList.remove('value')
        progress_width.classList.add('new_progress_value')

        progress_bar.classList.remove('progress_bar')
        progress_bar.classList.add('new_progress_bar')

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

        progress_width.classList.remove('new_progress_value')
        progress_width.classList.add('value')

        progress_bar.classList.remove('new_progress_bar')
        progress_bar.classList.add('progress_bar')

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



