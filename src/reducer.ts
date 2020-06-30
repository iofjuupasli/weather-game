import * as Actions from "./actions";
import { Action } from "./actions";
import { State, Units } from "./model";

const initState: State = {
    isLoading: true,
    settings: { isOpen: false, units: Units.celsius },
    options: null,
    history: [],
};

export const stateReducer = (state: State = initState, action: Action) => {
    switch (action.type) {
        case Actions.OPTION_SELECTED:
            return {
                ...state,
                options: null,
                history: [
                    ...state.history,
                    {
                        options: state.options,
                        selected: action.id,
                    },
                ],
            };
        case Actions.OPTIONS_NEXT_REQUESTED:
            return {
                ...state,
                isLoading: true,
            };
        case Actions.OPTIONS_NEXT_FETCHED:
            return {
                ...state,
                isLoading: false,
                options: action.options,
            };
        case Actions.SETTINGS_TOGGLED:
            return {
                ...state,
                settings: { ...state.settings, isOpen: !state.settings.isOpen },
            };
        case Actions.UNITS_CHANGED:
            return {
                ...state,
                settings: { ...state.settings, units: action.units },
            };
        default:
            return state;
    }
};
