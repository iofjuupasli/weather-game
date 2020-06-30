const openWeatherMapAppId = "d7fa725965af3b0f6388e954f6e5cb03";

export const getTemperature = async (city: string, countryIso: string) => {
    const response = await fetch(
        `//api.openweathermap.org/data/2.5/weather?q=${city},${countryIso}&units=metric&appid=${openWeatherMapAppId}`,
    );
    const weatherRaw = await response.json();
    return Math.round(weatherRaw.main.temp);
};
