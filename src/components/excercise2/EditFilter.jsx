import React from 'react';
import styled from 'styled-components';

export default function EditFilter() {
    return (
        <StyledWrapper>
            <p>Edit Filter</p>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.button`
    border: 1px solid ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    max-width: 336px;
    display: flex;
    align-items: center;
    margin: 6px 6px 0 0;
    padding: 7px 10px;
    background-color: ${({ theme: { editColor } }) => editColor};
    color: #fff;
    & p {
        margin: 0;
        padding: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
    }
`;
