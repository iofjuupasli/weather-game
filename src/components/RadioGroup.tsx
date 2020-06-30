import * as React from "react";
import styled from "styled-components";

const RadioContainer = styled.label`
    display: block;
    padding: 8px 8px 8px 38px;
`;

type RadioProps = {
    name: string;
    value: string;
    children: JSX.Element | string;
    onChange: (value: string) => void;
    checked: boolean;
};

const Radio = ({ name, value, children, onChange, checked }: RadioProps) => (
    <RadioContainer>
        <input
            name={name}
            type="radio"
            onChange={() => onChange(value)}
            checked={checked}
        />
        {children}
    </RadioContainer>
);

type Props = {
    options: Array<{ value: string; title: string }>;
    name: string;
    onChange: (value: string) => void;
    value: string;
};

export const RadioGroup = ({
    options,
    name,
    onChange,
    value: groupValue,
}: Props) => (
    <div>
        {options.map(({ value, title }) => (
            <Radio
                key={value}
                name={name}
                value={value}
                onChange={onChange}
                checked={value === groupValue}
            >
                {title}
            </Radio>
        ))}
    </div>
);
