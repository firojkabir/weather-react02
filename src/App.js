import React from 'react';
import Weather from './app_component/weather.component'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'


const API_key = "fea889a778a75eb0e579a6800b8b859f";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			city: undefined,
			country: undefined,
			icon: undefined,
			main: undefined,
			celsius: undefined,
			temp_max: undefined,
			temp_min: undefined,
			description: "",
			error: false
		};
		this.getWeather();

		this.weatherIcon = {
			Thunderstorm: "wi-thunderstorm"
		}
	}

	// calCelsius(temp) {
	// 	let cell = Math.floor(temp-273.15);
	// 	return cell;
	// }

	getWeather = async () => {
		const api_call = await fetch(
			`http://api.openweathermap.org/data/2.5/weather?q=Fulda,De&units=metric&appid=${API_key}`
		);

		const response = await api_call.json();

		console.log(response);

		this.setState({
			city: response.name,
			country: response.sys.country,
			celsius: response.main.temp,
			temp_max: response.main.temp_max,
			temp_min: response.main.temp_min,
			description: response.weather[0].description,
			icon: this.weatherIcon.Thunderstorm,
		})
	}

	render() {
		return(
			<div className="App">
				<Weather 
					city={this.state.city} 
					country={this.state.country} temp_celsius={this.state.celsius}
					temp_max={this.state.temp_max}
					temp_min={this.state.temp_min}
					description={this.state.description}
					weatherIcon={this.state.icon}
				/>
			</div>
		)
	}
}

export default App;
