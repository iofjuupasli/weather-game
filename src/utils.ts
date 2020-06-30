export const shuffle = (array) => {
    array = array.slice();
    let counter = array.length;
    while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
};

export const maxBy = (array, mapFn) =>
    array.reduce(
        (result, item) => {
            const value = mapFn(item);
            if (value > result.maxValue) {
                return {
                    maxValue: value,
                    item,
                };
            }
            return result;
        },
        { maxValue: -Infinity, item: null },
    ).item;

export const sumBy = <T extends any>(
    array: Array<T>,
    mapFn: (item: T) => number,
) => array.reduce((result, item) => result + mapFn(item), 0);

export const last = <T extends any>(array: Array<T>): T =>
    array[array.length - 1];

export const convertToFahrenheit = (celsius: number) => Math.round(celsius * 1.8 + 32);
