import * as React from "react";
import styled from "styled-components";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Units } from "../../model";
import { getUnits, getHistory } from "../../selectors";
import { unitsChanged } from "../../actions";
import { Divider } from "../../components/Divider";
import { Label } from "../../components/Label";
import { RadioGroup } from "../../components/RadioGroup";
import { SettingsCloseButton } from "./SettingsCloseButton";
import { GameHistory } from "./GameHistory";
import { Menu } from "../../components/Menu";

const SettingsFade = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.2);
`;

const SettingsPanel = styled.div`
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    width: 400px;
    background: #ecf0f1;
    overflow: auto;
    box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.15);
`;

const SettingsGroup = styled.div`
    padding: 8px 0 16px 0;
`;

type Props = {
    onClose: () => void;
};

export const Settings = ({ onClose }: Props) => {
    const history = useSelector(getHistory);
    const units = useSelector(getUnits);
    const dispatch = useDispatch();
    const onUnitsChange = useCallback(
        (units) => {
            dispatch(unitsChanged(units));
        },
        [dispatch],
    );
    return (
        <SettingsFade
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <SettingsPanel>
                <Menu right={<SettingsCloseButton onClick={onClose} />} />
                <Divider />
                <SettingsGroup>
                    <Label>Units:</Label>
                    <RadioGroup
                        name="units"
                        value={units}
                        options={[
                            { value: Units.celsius, title: `Celsius` },
                            { value: Units.fahrenheit, title: `Fahrenheit` },
                        ]}
                        onChange={onUnitsChange}
                    />
                </SettingsGroup>
                <Divider />
                <SettingsGroup>
                    <Label>History:</Label>
                    <GameHistory history={history} />
                </SettingsGroup>
            </SettingsPanel>
        </SettingsFade>
    );
};
