import React, { useState } from 'react';

import Container from './components/Container';
import Input from './components/Input';
import Label from './components/Label';
import Title from './components/Title';
import ErrorMessage from './components/ErrorMessage';

const App = () => {
    const [binaryText, setBinaryText] = useState('');
    const [decimalText, setDecimalText] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isEmpty = (value) => value === '' ? true : false;
    const clearInput = () => {
        setBinaryText('');
        setDecimalText('');
    };

    const binaryToDecimal = event => {

        // Check value is not empty
        if (isEmpty(event.target.value)) {
            clearInput();
            return;
        }

        const enterdValue = event.target.value;

        // Invalid value
        if (!enterdValue.match(/^[0-1]+$/)) {
            setErrorMessage('You can only enter "0" or "1"');
            return;
        }

        // Valid value
        setErrorMessage('');

        // Reverse enterd value
        const reversedValue = enterdValue
            .split('')
            .map(Number)
            .reverse();

        const reducer = (accumulator, currentValue, index) => {
            return accumulator + (currentValue === 1 ? Math.pow(2, index) : 0);
        }

        const convertToDecimal = reversedValue.reduce(reducer);

        setBinaryText(enterdValue);
        setDecimalText(convertToDecimal);
    };

    const decimalToBinary = (event) => {

        // Check value is not empty
        if (isEmpty(event.target.value)) {
            clearInput();
            return;
        }

        let enterdValue = parseInt(event.target.value);

        // Check value is Number
        if (isNaN(enterdValue)) {
            setErrorMessage('You can only enter Decimal');
            return;
        }

        setDecimalText(enterdValue);

        // If value is 0, binaray equals 0 too
        if (enterdValue === 0) {
            setBinaryText(0);
            return;
        }

        const remainders = [];

        while (Math.floor(enterdValue) > 0) {
            remainders.push(enterdValue % 2);
            enterdValue = Math.floor(enterdValue / 2);
        }

        remainders.reverse();

        const reducer = (accumulator, currentValue) => accumulator + currentValue.toString();
        const convertToBinary = remainders.reduce(reducer);

        setBinaryText(convertToBinary);
    };

    return (
        <Container>
            <Title>Binary To Decimal</Title>
            <div>
                <Label>Binary:</Label>
                <Input
                    value={binaryText}
                    onChange={binaryToDecimal}
                />
            </div>
            <div>
                <Label>Decimal:</Label>
                <Input
                    value={decimalText}
                    onChange={decimalToBinary}
                />
            </div>
            {errorMessage && (
                <ErrorMessage>Error: {errorMessage}</ErrorMessage>
            )}
        </Container>
    );
};

export default App;