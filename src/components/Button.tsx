import styled from "styled-components";

export const Button = styled.button`
    background: ${({ theme }) => theme.successColor};
    border: none;
    outline: none;
    color: #fff;
    font-size: 24px;
    padding: 16px 24px;
    cursor: pointer;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.7;
    }
`;
