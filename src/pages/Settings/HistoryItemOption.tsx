import * as React from "react";
import styled from "styled-components";
import { formatTemperature } from "../formatTemperature";
import { Status, Units } from "../../model";

const getBackgroundColor = (status: Status, theme) => {
    switch (status) {
        case Status.right:
            return theme.successColor;
        case Status.wrong:
            return theme.failColor;
        default:
            return "#fff";
    }
};

const getTextColor = (status: Status, theme) => {
    switch (status) {
        case Status.right:
        case Status.wrong:
            return "#fff";
        default:
            return "#000";
    }
};

const HistoryItemOptionContainer = styled.div<{ status: Status }>`
    width: 130px;
    min-height: 100px;
    background: ${({ status, theme }) => getBackgroundColor(status, theme)};
    color: ${({ status, theme }) => getTextColor(status, theme)};
    text-align: center;
    padding: 8px;
    margin: 8px;
`;

type Props = {
    city: string;
    country: string;
    status: Status;
    temperature: number;
    units: Units;
};

export const HistoryItemOption = ({
    city,
    country,
    status,
    temperature,
    units,
}: Props) => (
    <HistoryItemOptionContainer status={status}>
        <div>{city}</div>
        <div>{country}</div>
        <div>{formatTemperature(temperature, units)}</div>
    </HistoryItemOptionContainer>
);
