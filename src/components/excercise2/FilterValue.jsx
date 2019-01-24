import React from 'react';
import styled from 'styled-components';
import RemoveFilterButton from './RemoveFilterButton';

export default function FilterValue({ filter, number }) {
    return (
        <StyledWrapper>
            <p>
                <StyledSpan>{`FILTER ${number}: `}</StyledSpan>
                {filter}
            </p>
            <RemoveFilterButton />
        </StyledWrapper>
    );
}

const StyledSpan = styled.span`
    color: ${({ theme: { defaultColor } }) => defaultColor};
`;

const StyledWrapper = styled.div`
    border: 1px solid ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    max-width: 336px;
    height: 25px;
    display: flex;
    align-items: center;
    margin: 6px 6px 0 0;
    padding: 3px 10px;
    & p {
        margin: 0;
        padding: 0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        font-size: 14px;
    }
`;
