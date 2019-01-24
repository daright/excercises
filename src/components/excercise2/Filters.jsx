import React, { Component } from 'react';
import styled from 'styled-components';
import FilterValue from './FilterValue';
import EditFilter from './EditFilter';

export default class Filters extends Component {
    state = {
        filters: ['Val1', 'Val1', 'Long value Long value Long value Long value Long value Long value ', 'Value 1']
    };
    render() {
        return (
            <StyledWrapper>
                {this.state.filters.map((filter, index) => (
                    <FilterValue key={index} number={index + 1} filter={filter} />
                ))}
                <EditFilter />
            </StyledWrapper>
        );
    }
}

const StyledWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
