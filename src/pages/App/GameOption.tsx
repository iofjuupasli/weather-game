import * as React from "react";
import styled from "styled-components";
import { Status, Units } from "../../model";
import { Fade } from "../../components/Fade";
import { getFadeColor } from "../getFadeColor";
import { formatTemperature } from "../formatTemperature";

const GameOptionContainer = styled.div`
    position: relative;
    width: 50%;
    overflow: hidden;
    height: 25vw;
    margin: 24px;
    max-width: 500px;
    max-height: 250px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;

const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const GameOptionText = styled.div`
    color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
`;

const City = styled(GameOptionText)`
    top: 40px;
    font-size: 48px;
`;

const Country = styled(GameOptionText)`
    top: 96px;
    font-size: 36px;
`;

const Temperature = styled(GameOptionText)`
    top: 140px;
    font-size: 36px;
`;

type Props = {
    id: string;
    imageUrl: string;
    city: string;
    country: string;
    temperature: number;
    units: Units;
    status: Status;
    onClick: (id: string) => void;
};

export const GameOption = ({
    id,
    imageUrl,
    city,
    country,
    temperature,
    units,
    status,
    onClick,
}: Props) => (
    <GameOptionContainer
        onClick={() => {
            onClick(id);
        }}
    >
        <Img key={id} src={imageUrl} />
        <Fade color={getFadeColor(status)} />
        <City>{city}</City>
        <Country>{country}</Country>
        {status !== Status.question ? (
            <Temperature>{formatTemperature(temperature, units)}</Temperature>
        ) : null}
    </GameOptionContainer>
);
