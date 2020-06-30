import { State, Option, HistoryItem, Status } from "./model";
import { maxBy, sumBy, last } from "./utils";

const checkAnswer = (options: Array<Option>, answer: string) => {
    const hottest = maxBy(options, ({ temperature }) => temperature);
    return hottest.id === answer;
};

export const getScore = (state: State) =>
    sumBy(state.history, (historyItem) =>
        checkAnswer(historyItem.options, historyItem.selected) ? 1 : 0,
    );

const getOptionsWithStatusFromHistoryItem = ({
    options,
    selected,
}: HistoryItem) =>
    options.map((option) => ({
        ...option,
        status:
            selected === option.id
                ? checkAnswer(options, selected)
                    ? Status.right
                    : Status.wrong
                : Status.answer,
    }));

export const getCurrentOptions = (state: State) => {
    if (state.options != null) {
        return state.options.map((option) => ({
            ...option,
            status: Status.question,
        }));
    }
    if (state.history.length === 0) {
        return [];
    }
    return getOptionsWithStatusFromHistoryItem(last(state.history));
};

export const getCurrentStatus = (state: State) => {
    if (state.options != null || state.history.length === 0) {
        return Status.question;
    }
    return getStatusFromHistoryItem(last(state.history));
};

export const getIsLoading = (state: State) => state.isLoading;

export const getIsCanGetNext = (state: State) => state.options == null;

export const getIsSettingsOpen = (state: State) => state.settings.isOpen;

export const getUnits = (state: State) => state.settings.units;

const getStatusFromHistoryItem = ({ options, selected }: HistoryItem) =>
    checkAnswer(options, selected) ? Status.right : Status.wrong;

export const getHistory = (state: State) =>
    state.history.map((historyItem) => ({
        options: getOptionsWithStatusFromHistoryItem(historyItem),
        status: getStatusFromHistoryItem(historyItem),
    }));
