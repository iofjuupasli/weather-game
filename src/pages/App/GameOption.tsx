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

    @media (max-width: 768px) {
        padding: 2px;
        margin: 8px;
    }
`;

const Img = styled.img`
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;

const GameOptionText = styled.div`
    color: #fff;
    opacity: 0.99;
    text-align: center;
    padding: 8px;

    @media (max-width: 768px) {
        padding: 2px;
    }
`;

const City = styled(GameOptionText)`
    font-size: 48px;
    padding-top: 24px;

    @media (max-width: 768px) {
        padding-top: 2px;
        font-size: 18px;
    }
`;

const Country = styled(GameOptionText)`
    font-size: 36px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
`;

const Temperature = styled(GameOptionText)`
    font-size: 36px;

    @media (max-width: 768px) {
        font-size: 14px;
    }
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
