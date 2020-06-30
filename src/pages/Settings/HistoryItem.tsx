import * as React from "react";
import { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { useSelector } from "react-redux";
import { Icons } from "../../components/Icons";
import { Status, Option } from "../../model";
import { getUnits } from "../../selectors";
import { HistoryItemOption } from "./HistoryItemOption";

const HistoryItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 8px 8px 16px 36px;
`;

type Props = {
    status: Status;
    options: Array<Option & { status: Status }>;
};

export const HistoryItem = ({ status, options }: Props) => {
    const units = useSelector(getUnits);
    const theme = useContext(ThemeContext);
    return (
        <HistoryItemContainer>
            {options.map((option) => (
                <HistoryItemOption
                    key={option.id}
                    city={option.city}
                    country={option.country}
                    status={option.status}
                    temperature={option.temperature}
                    units={units}
                />
            ))}
            {status === Status.right ? (
                <Icons.Check color={theme.successColor} />
            ) : (
                <Icons.Close color={theme.failColor} />
            )}
        </HistoryItemContainer>
    );
};
