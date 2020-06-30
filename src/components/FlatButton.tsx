import styled from "styled-components";

export const FlatButton = styled.button`
    display: flex;
    align-items: center;
    background: none;
    border: none;
    outline: none;
    font-size: 18px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.6;
    }

    svg {
        padding-left: 8px;
    }
`;
