import { convertToFahrenheit } from "../utils";
import { Units } from "../model";

export const formatTemperature = (value: number, units: Units) =>
    `${value > 0 ? "+" : ""}${
        units === Units.celsius ? value : convertToFahrenheit(value)
    } ${units === Units.celsius ? "°C" : "°F"}`;
