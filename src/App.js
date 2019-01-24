import React, { Component } from 'react';
import './App.css';
import Excercise2 from './components/excercise2/Excercise2';
import { ThemeProvider } from 'styled-components';
import Excercise4 from './components/excercise4/Excercise4';
import Excercise3 from './components/excercise3/Excercise3';

const theme = {
    borderRadius: '5px',
    defaultBorderColor: '#f2f2f2',
    defaultColor: '#9b9ea2',
    accentColor: '#000',
    editColor: '#21a3e9',
    backgroundColor: '#f8f9fb'
};

class App extends Component {
    render() {
        return (
            <div className="App">
                <ThemeProvider theme={theme}>
                    <React.Fragment>
                        <Excercise2 />
                        <Excercise3 />
                        <Excercise4 />
                    </React.Fragment>
                </ThemeProvider>
            </div>
        );
    }
}

export default App;
