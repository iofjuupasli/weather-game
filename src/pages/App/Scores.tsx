import * as React from "react";

type Props = {
    value: number;
};

export const Scores = ({ value }: Props) => <div>Score: {value}</div>;
