export const enum Status {
    question = `question`,
    answer = `answer`,
    right = `right`,
    wrong = `wrong`,
}

export const enum Units {
    celsius = `celsius`,
    fahrenheit = `fahrenheit`,
}

export type Option = {
    id: string;
    city: string;
    country: string;
    temperature: number;
    imageUrl: string;
};

export type HistoryItem = {
    options: Array<Option>;
    selected: string;
};

export type State = {
    isLoading: boolean;
    settings: {
        isOpen: boolean;
        units: Units;
    };
    options: Array<Option>;
    history: Array<HistoryItem>;
};
