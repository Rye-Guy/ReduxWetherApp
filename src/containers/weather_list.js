import React, { Component } from 'React';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component{
    
    renderWeather(cityData){
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidity = cityData.list.map(weather => weather.main.humidity);
        const { lon, lat } = cityData.city.coord;
        return(
            <tr key={cityData.city.name}>
                <td><GoogleMap lon={lon} lat={lat}></GoogleMap></td>
                <td><Chart data={temps} color="orange" units={'K'}></Chart></td>
                <td><Chart data={pressures} color="green" units={'hPa'}></Chart></td>
                <td><Chart data={humidity} color="purple" units={'%'}></Chart></td>
            </tr>
        )
    }

    render(){
        return(
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (K)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);