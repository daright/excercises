import React, { Component } from 'react';
import styled from 'styled-components';
import { postForm } from '../../requests';
import ResponseCode from './ResponseCode';
export default class Form extends Component {
    state = {
        full_name: '',
        company: '',
        email: '',
        phone: '',
        isSubmitEnabled: false,
        response: ''
    };

    validateForm = () => {
        const { full_name, company, email } = this.state;
        this.setState({ isSubmitEnabled: !!full_name && !!company && !!email });
    };
    onChange = evt => {
        const {
            target: { id, value }
        } = evt;
        this.setState({ [id]: value }, this.validateForm);
    };

    onSubmit = async () => {
        const { full_name, company, email, phone } = this.state;
        const data = { full_name, company, email, phone };
        const response = await postForm(data);
        this.setState({ response: JSON.stringify(response) });
    };
    render() {
        return (
            <StyledWrapper>
                <StyledForm action="">
                    <label htmlFor="full_name">Full name *</label>
                    <input type="text" id="full_name" onChange={this.onChange} required />
                    <label htmlFor="company">Company *</label>
                    <input type="text" id="company" onChange={this.onChange} required />
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" onChange={this.onChange} required />
                    <label htmlFor="phone">Phone number</label>
                    <input type="text" id="phone" onChange={this.onChange} />
                </StyledForm>
                <SubmitButton disabled={!this.state.isSubmitEnabled} onClick={this.onSubmit}>
                    Submit data
                </SubmitButton>
                <ResponseCode data={this.state.response} />
            </StyledWrapper>
        );
    }
}

const StyledWrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1em;
`;

const StyledForm = styled.form`
    border: 1px solid ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    max-width: 336px;
    margin: 6px 6px 0 0;
    width: 250px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & input {
        border: 1px solid ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
        border-radius: ${({ theme: { borderRadius } }) => borderRadius};
        height: 24px;
        margin: 5px 0 10px;
    }
    & label {
        color: #7d7b7b;
        text-align: start;
    }
    & * {
        width: 100%;
    }
`;

const SubmitButton = styled.button`
    border: 1px solid ${({ theme: { defaultBorderColor } }) => defaultBorderColor};
    border-radius: ${({ theme: { borderRadius } }) => borderRadius};
    margin: 1em 0;
    padding: 10px;
    background-color: ${({ theme: { editColor } }) => editColor};
    color: #fff;
    font-weight: bold;
`;
