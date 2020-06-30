import * as React from "react";
import styled from "styled-components";

const MenuContainer = styled.div`
    display: flex;
    height: 96px;
`;

const MenuPart = styled.div`
    flex: 1 1 0;
    display: flex;
    align-items: center;
    padding: 36px;

    @media (max-width: 768px) {
        padding: 12px;
    }
`;

const MenuLeft = styled(MenuPart)`
    justify-content: flex-start;
`;

const MenuCenter = styled(MenuPart)`
    justify-content: center;
`;

const MenuRight = styled(MenuPart)`
    justify-content: flex-end;
`;

type Props = {
    children?: JSX.Element;
    left?: JSX.Element;
    right?: JSX.Element;
};

export const Menu = ({ children, left, right }: Props) => (
    <MenuContainer>
        <MenuLeft>{left}</MenuLeft>
        <MenuCenter>{children}</MenuCenter>
        <MenuRight>{right}</MenuRight>
    </MenuContainer>
);
