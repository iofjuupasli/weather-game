import * as React from "react";
import { FlatButton } from "../../components/FlatButton";
import { Icons } from "../../components/Icons";

type Props = {
    onClick: () => void;
};

export const SettingsCloseButton = ({ onClick }: Props) => (
    <FlatButton onClick={onClick}>
        Settings
        <Icons.Close />
    </FlatButton>
);
