import styled from "styled-components";

export const Fade = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${({color}) => color};
    opacity: 0.4;
`;
