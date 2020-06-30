import * as React from "react";
import { HistoryItem } from "./HistoryItem";
import { Option, Status } from "../../model";

type Props = {
    history: Array<{
        status: Status;
        options: Array<Option & { status: Status }>;
    }>;
};

export const GameHistory = ({ history }: Props) => (
    <div>
        {history.map(({ status, options }) => (
            <HistoryItem
                key={options[0].id}
                status={status}
                options={options}
            />
        ))}
    </div>
);
