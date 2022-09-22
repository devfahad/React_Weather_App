import React, {useEffect, useState} from "react";
import {WeatherCard} from "./WeatherCard";
import "./style.css";

export const Temp = () => {
    const [searchValue, setSearchValue] = useState("Sylhet");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`;
            let res = await fetch(url);
            let data = await res.json();

            const {temp, pressure, humidity} = data.main;
            const {main: weatherMood} = data.weather[0];
            const {name} = data;
            const {speed} = data.wind;
            const {country, sunset} = data.sys;

            const myNewWeatherInfo = {
                temp,
                pressure,
                humidity,
                weatherMood,
                name,
                speed,
                country,
                sunset,
            };

            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);

    return (
        <>
            <div className='wrap'>
                <div className='search'>
                    <input
                        type='search'
                        id='search'
                        placeholder='Search...'
                        autoFocus
                        className='searchTerm'
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                        }}
                    />
                    <button
                        className='searchButton'
                        type='button'
                        onClick={getWeatherInfo}
                    >
                        Search
                    </button>
                </div>
            </div>
            {/* Temp card */}
            <WeatherCard tempInfo={tempInfo} />
        </>
    );
};
