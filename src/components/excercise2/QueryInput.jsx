import React, { Component } from 'react';
import styled from 'styled-components';

export default class QueryInput extends Component {
    state = {
        query: ''
    };

    setQuery = ({ target: { value } }) => this.setState({ query: value });
    render() {
        return (
            <StyledContainer>
                <StyledIcon />
                <StyledInput type="text" onChange={this.setQuery} placeholder={'type query here...'} />
            </StyledContainer>
        );
    }
}

const StyledContainer = styled.section`
    display: flex;
`;

const StyledIcon = styled.i`
    padding: 10px 0 10px 15px;
    color: ${({ theme: { defaultColor } }) => defaultColor};
    text-align: center;
    border-width: 1px 0 1px 1px;
    border-style: solid;
    border-color: ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
    border-radius: ${({ theme: { borderRadius } }) => `${borderRadius} 0 0 ${borderRadius}`};
    :before {
        content: '\f001';
    }
`;

const StyledInput = styled.input`
    color: ${({ theme: { defaultColor } }) => defaultColor};
    padding: 11px;
    width: 100%;
    border: 1px solid ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
    border-radius: ${({ theme: { borderRadius } }) => `0 ${borderRadius} ${borderRadius} 0`};
    border-left: none;
    outline: none;
`;
