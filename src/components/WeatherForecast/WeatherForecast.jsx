import './WeatherForecast.css'
import { WeatherData } from '../WeatherData/WeatherData';
import { WeatherIcon } from '../WeatherIcon/WeatherIcon';

export const WeatherForecast = ({forecasts}) => {
    return (
        <>
            {forecasts.map((weatherForecasts, index) => (
                <div className="weather">
                    <WeatherData key={index} day={weatherForecasts.day} />
                    <WeatherIcon img={weatherForecasts.img} imgAlt={weatherForecasts.imgAlt} />  
                    <WeatherData conditions={weatherForecasts.conditions}time={weatherForecasts.time} />
            </div>
            ))}
        </>
    );
}