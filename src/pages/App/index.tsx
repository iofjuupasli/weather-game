import * as React from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "../../components/Title";
import {
    getUnits,
    getIsSettingsOpen,
    getScore,
    getCurrentOptions,
    getCurrentStatus,
    getIsLoading,
    getIsCanGetNext,
} from "../../selectors";
import {
    optionSelected,
    optionsNextRequested,
    settingsToggled,
} from "../../actions";
import { Menu } from "../../components/Menu";
import { Button } from "../../components/Button";
import { Loader } from "../../components/Loader";
import { SettingsButton } from "./SettingsButton";
import { Scores } from "./Scores";
import { GameOption } from "./GameOption";
import { GameResponse } from "./GameResponse";
import { Settings } from "../Settings";
import { createGlobalStyle } from "styled-components";
import { GameOptions } from "./GameOptions";
import { Center } from "../../components/Center";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: "Roboto", sans-serif;
        box-sizing: border-box;
    }

    body, html {
        padding: 0;
        margin: 0;
    }

    body {
        font-size: 18px;
    }
`;

export const App = () => {
    const isSettingsOpen = useSelector(getIsSettingsOpen);
    const score = useSelector(getScore);
    const options = useSelector(getCurrentOptions);
    const status = useSelector(getCurrentStatus);
    const units = useSelector(getUnits);
    const isLoading = useSelector(getIsLoading);
    const isCanGetNext = useSelector(getIsCanGetNext);
    const dispatch = useDispatch();
    const onNextClick = useCallback(() => {
        if (isLoading) {
            return;
        }
        dispatch(optionsNextRequested());
    }, [dispatch, isLoading]);
    const onOptionClick = useCallback(
        (id) => {
            if (isCanGetNext) {
                onNextClick();
                return;
            }
            dispatch(optionSelected(id));
        },
        [onNextClick, isCanGetNext, dispatch],
    );
    const onSettingsToggle = useCallback(() => {
        dispatch(settingsToggled());
    }, [dispatch]);
    return (
        <div>
            <GlobalStyle />
            <Menu right={<SettingsButton onClick={onSettingsToggle} />}>
                <Scores value={score} />
            </Menu>
            <Title>Which city is hotter right now?</Title>
            <GameOptions>
                {options.map((option) => (
                    <GameOption
                        key={option.id}
                        id={option.id}
                        city={option.city}
                        country={option.country}
                        imageUrl={option.imageUrl}
                        status={option.status}
                        temperature={option.temperature}
                        units={units}
                        onClick={onOptionClick}
                    />
                ))}
            </GameOptions>
            <GameResponse status={status} />
            {isCanGetNext ? (
                <Center>
                    <Button onClick={onNextClick}>
                        Next cities{isLoading ? <Loader /> : ""}
                    </Button>
                </Center>
            ) : null}

            {isSettingsOpen ? <Settings onClose={onSettingsToggle} /> : null}
        </div>
    );
};
