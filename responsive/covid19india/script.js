fetch('https://data.covid19india.org/v4/min/data.min.json')
.then(response => response.json())
.then(data => {
  

    for(let key of Object.keys(data)){
      // console.log(data[key])

      let data_of_delta = data[key].delta;
      console.log(data_of_delta);
      let delta_confirmed = data_of_delta.confirmed;
      let delta_recovered = data_of_delta.recovered;

    }



});






