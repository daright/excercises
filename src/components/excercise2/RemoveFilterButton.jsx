import React from 'react';
import styled from 'styled-components';

export default function RemoveFilterButton() {
    return <StyledButton>x</StyledButton>;
}

const StyledButton = styled.button`
    color: ${({ theme: { defaultColor } }) => defaultColor};
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
`;
