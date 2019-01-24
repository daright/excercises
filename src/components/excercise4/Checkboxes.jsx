import React, { Component } from 'react';
import Checkbox from './Checkbox';
import styled from 'styled-components';

export default class Checkboxes extends Component {
    state = {
        checkboxes: [
            { label: 'Alicja', disabled: false, checked: false },
            { label: 'Adam', disabled: false, checked: false },
            { label: 'Andrzej', disabled: false, checked: false },
            { label: 'Brzetysław', disabled: false, checked: false },
            { label: 'Bartłomiej', disabled: false, checked: false },
            { label: 'Hieronim', disabled: false, checked: false }
        ]
    };

    onChange = (label, checked) => {
        const [firstLetter] = label;
        this.setState({
            checkboxes: this.state.checkboxes.map(checkbox => {
                if (label === checkbox.label) {
                    return { ...checkbox, checked };
                } else if (checkbox.label.startsWith(firstLetter) && checked) {
                    return { ...checkbox, disabled: true };
                } else if (checkbox.label.startsWith(firstLetter) && !checked) {
                    return { ...checkbox, disabled: false };
                } else {
                    return checkbox;
                }
            })
        });
    };
    render() {
        return (
            <StyledWrapper>
                {this.state.checkboxes.map(({ label, disabled, checked }) => (
                    <Checkbox key={label} label={label} disabled={disabled} checked={checked} onChange={this.onChange.bind(this, label)} />
                ))}
            </StyledWrapper>
        );
    }
}

const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1em;
`;
