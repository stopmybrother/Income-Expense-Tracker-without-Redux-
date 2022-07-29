import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import { FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";
import { Form, Label, Input, SubmitButton } from "../../styled-components/components/Form";

export const AddTransaction = () => {
    const [ textValue, setTextValue ] = useState( "" );
    const [ amountValue, setAmountValue ] = useState( "" );
    const { addTransaction } = useContext( GlobalContext );
    const HandleSubmit = ( e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        if ( addTransaction ) {
            const newTransaction = {
                id: Math.floor( Math.random() * 100000000 ),
                text: textValue,
                amount: +amountValue,
            };
            addTransaction( newTransaction );
        }
        setTextValue("");
        setAmountValue("");
    };
    return (
        <FlexContainerNotCentered
            flexDirection = "column"
            alignItems = "left"
            rowGap = { 20 }
        >
            <Text
                beforeTransactionList
            >
                Add new transaction
            </Text>
            <Form
                onSubmit = { HandleSubmit }
            >
                <FlexContainerNotCentered
                    flexDirection = "column"
                    alignItems = "left"
                    rowGap = { 10 }
                >
                    <Label>
                        Text
                    </Label>
                    <Input
                        type = "text"
                        value = { textValue }
                        onChange = { ( e: React.ChangeEvent<HTMLInputElement> ) => setTextValue( e.target.value ) }
                        placeholder = "Enter text..."
                        required
                    />
                </FlexContainerNotCentered>
                <FlexContainerNotCentered
                    flexDirection = "column"
                    alignItems = "left"
                    rowGap = { 10 }
                >
                    <Label>
                        Amount (negative - expense, positive - income)
                    </Label>
                    <Input
                        type = "number"
                        value = { amountValue }
                        onChange = { ( e: React.ChangeEvent<HTMLInputElement> ) => setAmountValue( e.target.value ) }
                        placeholder = "Enter amount..."
                        required
                    />
                </FlexContainerNotCentered>
                <SubmitButton>
                    Add transaction
                </SubmitButton>
            </Form>
        </FlexContainerNotCentered>
    );
};