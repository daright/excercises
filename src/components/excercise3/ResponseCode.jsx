import React from 'react';
import styled from 'styled-components';
export default function ResponseCode({ data }) {
    return (
        <StyledCode>
            {data ? `Response: ` : ''}
            {data}
        </StyledCode>
    );
}

const StyledCode = styled.code`
    font-size: 10px;
    display: block;
    margin: 1em;
    padding: 1em;
`;
