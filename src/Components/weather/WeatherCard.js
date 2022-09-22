import React, {useState, useEffect} from "react";

export const WeatherCard = ({tempInfo}) => {
    const [weatherIcon, setWeatherIcon] = useState("");
    let {temp, pressure, humidity, weatherMood, name, speed, country, sunset} =
        tempInfo;

    // Converting seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    useEffect(() => {
        if (weatherMood) {
            switch (weatherMood) {
                case "Clouds":
                    setWeatherIcon("wi wi-day-cloudy");
                    break;
                case "Haze":
                    setWeatherIcon("wi wi-fog");
                    break;
                case "Clear":
                    setWeatherIcon("wi wi-day-sunny");
                    break;
                default:
                    setWeatherIcon("wi wi-day-cloudy");
                    break;
            }
        }
    }, [weatherMood]);

    return (
        <>
            <article className='widget'>
                <div className='weatherIcon'>
                    <i className={weatherIcon}></i>
                </div>
                <div className='weatherInfo'>
                    <div className='temperature'>
                        <span>{temp}&deg;</span>
                    </div>
                    <div className='description'>
                        <div className='weatherCondition'>{weatherMood}</div>
                        <div className='place'>
                            {name}, {country}
                        </div>
                    </div>
                </div>
                <div className='date'>{new Date().toLocaleString()}</div>
                {/* 4 Column section */}
                <div className='extra-temp'>
                    <div className='temp-info-minmax'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-sunset"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {timeStr} <br />
                                Sunset
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-humidity"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {humidity} <br />
                                Humidity
                            </p>
                        </div>
                    </div>
                    <div className='weather-extra-info'>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-rain"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {pressure} <br />
                                Pressure
                            </p>
                        </div>
                        <div className='two-sided-section'>
                            <p>
                                <i className={"wi wi-strong-wind"}></i>
                            </p>
                            <p className='extra-info-leftside'>
                                {speed} <br />
                                Speed
                            </p>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
};
