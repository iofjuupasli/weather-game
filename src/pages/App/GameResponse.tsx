import * as React from "react";
import styled from "styled-components";
import { Status } from "../../model";

const GameResponseText = styled.div`
    text-align: center;
    font-size: 48px;
    font-weight: 300;
`;

type Props = {
    status: Status;
};

export const GameResponse = ({ status }: Props) => {
    if (status === Status.right) {
        return <GameResponseText>You are right!</GameResponseText>;
    }
    if (status === Status.wrong) {
        return <GameResponseText>You are wrong...</GameResponseText>;
    }
    return null;
};
