temp = document.getElementById('temp');
humidity = document.getElementById('humidity');
gp2y = document.getElementById('gp2y');
adsFirstvalue = document.getElementById('adsFirstValue');
adsSecondvalue = document.getElementById('adsSecondValue');
adsThirdvalue = document.getElementById('adsThirdValue');
adsFourthvalue = document.getElementById('adsFourthValue');
differential_Pressure = document.getElementById('differentialPressure');
acceierometerFirstValue = document.getElementById('acceierometerFirstValue');
acceierometerSecondValue = document.getElementById('acceierometerSecondValue');
acceierometerThirdValue = document.getElementById('acceierometerThirdValue');
gyroscopeFirstValue = document.getElementById('gyroscopeFirstValue');
gyroscopeSecondValue = document.getElementById('gyroscopeSecondValue');
gyroscopeThirdValue = document.getElementById('gyroscopeThirdValue');
colorRed = document.getElementById('colorRed');
colorGreen = document.getElementById('colorGreen');
colorBlue = document.getElementById('colorBlue');

setInterval(function () {
	fetch('rpi_sensors_module/dht.json')
	.then(result => result.json())
	.then(json => {
		temp.innerHTML = json['temperature']
		humidity.innerHTML = json['humidity']
	})
	.catch((error)=> {
		console.log(error)
	});

},5000)

setInterval(function () {
	fetch('rpi_sensors_module/gp2yoe03.json')
	.then(result => result.json())
	.then(json => {
		gp2y.innerHTML = json['distance']
	})
	.catch((error)=> {
		console.log(error)
	});

},5000)

setInterval(function () {
	fetch('rpi_sensors_module/pressure.json')
	.then(result => result.json())
	.then(json => {
		differential_Pressure.innerHTML = json['Pressure']
	})
	.catch((error)=> {
		console.log(error)
	});

},5000)

setInterval(function () {
	fetch('rpi_sensors_module/ads1115.json')
	.then(result => result.json())
	.then(json => {
		adsFirstvalue.innerHTML = json['A0']
		adsSecondvalue.innerHTML = json['A1']
		adsThirdvalue.innerHTML = json['A2']
		adsFourthvalue.innerHTML = json['A3']
	})
	.catch((error)=> {
		console.log(error)
	});

},5000)

setInterval(function () {
	fetch('rpi_sensors_module/mpu6050_acceleration.json')
	.then(result => result.json())
	.then(json => {
		acceierometerFirstValue.innerHTML = json['X']
		acceierometerSecondValue.innerHTML = json['Y']
		acceierometerThirdValue.innerHTML = json['Z']
	})
	.catch((error)=> {
		console.log(error)
	});

},5000)

setInterval(function () {
	fetch('rpi_sensors_module/mpu6050_gyro.json')
	.then(result => result.json())
	.then(json => {
		gyroscopeFirstValue.innerHTML = json['X']
		gyroscopeSecondValue.innerHTML = json['Y']
		gyroscopeThirdValue.innerHTML = json['Z']
	}).catch((error)=> {
		console.log(error)
	});

},5000)

setInterval(function () {
	fetch('rpi_sensors_module/tcs34725.json')
	.then(result => result.json())
	.then(json => {
		colorRed.innerHTML = json['R']
		colorGreen.innerHTML = json['G']
		colorBlue.innerHTML = json['B']
	}).catch((error)=> {
		console.log(error)
	});

},1000)
