import React from 'react';
import QueryInput from './QueryInput';
import Filters from './Filters';
import styled from 'styled-components';

export default function Excercise2() {
    return (
        <StyledWrapper>
            <h3>Excercise 2</h3>
            <QueryInput />
            <Filters />
        </StyledWrapper>
    );
}

const StyledWrapper = styled.section`
    padding: 1em;
`;
