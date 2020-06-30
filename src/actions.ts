import { Option, Units } from "./model";
import citiesUnshuffled from "../cities.json";
import { shuffle } from "./utils";
import { getTemperature } from "./api";

let cities = shuffle(citiesUnshuffled);

const countOfOptions = 2;

const getRandomOptions = async () => {
    if (cities.length < 2) {
        cities = shuffle(citiesUnshuffled);
    }
    const options = Array.from({ length: countOfOptions }, () => cities.pop());
    try {
        const optionsWithTemperature = await Promise.all(
            options.map(async (item) => ({
                ...item,
                temperature: await getTemperature(item.city, item.countryIso),
            })),
        );
        return optionsWithTemperature;
    } catch (error) {
        console.error(error);
        await new Promise((resolve) => {
            setTimeout(resolve, 500);
        });
        return getRandomOptions();
    }
};

export const OPTION_SELECTED = "OPTION_SELECTED";

type OptionSelectedAction = { type: typeof OPTION_SELECTED; id: string };

export const optionSelected = (id: string): OptionSelectedAction => ({
    type: OPTION_SELECTED,
    id,
});

export const OPTIONS_NEXT_REQUESTED = "OPTIONS_NEXT_REQUESTED";

type OptionsNextRequestedAction = { type: typeof OPTIONS_NEXT_REQUESTED };

export const optionsNextRequested = () => async (dispatch) => {
    dispatch({
        type: OPTIONS_NEXT_REQUESTED,
    });
    const randomOptions = await getRandomOptions();
    dispatch(optionsNextFetched(randomOptions));
};

export const OPTIONS_NEXT_FETCHED = "OPTIONS_NEXT_FETCHED";

type OptionsNextFetchedAction = {
    type: typeof OPTIONS_NEXT_FETCHED;
    options: Array<Option>;
};

export const optionsNextFetched = (
    options: Array<Option>,
): OptionsNextFetchedAction => ({
    type: OPTIONS_NEXT_FETCHED,
    options,
});

export const SETTINGS_TOGGLED = "SETTINGS_TOGGLED";

type SettingsToggledAction = { type: typeof SETTINGS_TOGGLED };

export const settingsToggled = (): SettingsToggledAction => ({
    type: SETTINGS_TOGGLED,
});

export const UNITS_CHANGED = "UNITS_CHANGED";

type UnitsChangedAction = { type: typeof UNITS_CHANGED; units: Units };

export const unitsChanged = (units: Units) => ({ type: UNITS_CHANGED, units });

export type Action =
    | OptionSelectedAction
    | OptionsNextRequestedAction
    | OptionsNextFetchedAction
    | SettingsToggledAction
    | UnitsChangedAction;
