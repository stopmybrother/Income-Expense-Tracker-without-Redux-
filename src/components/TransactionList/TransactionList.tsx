import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import { FlexContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";
import { ListUl } from "../../styled-components/components/List";
import { IInitialData } from "../../context/GlobalState/GlobalState";
import { Transaction } from "../Transaction/Transaction";

export const TransactionList = () => {
    const { transactions } = useContext( GlobalContext );
    return (
        <FlexContainerNotCentered
            flexDirection = "column"
            alignItems = "left"
            rowGap = { 30 }
        >
            <Text
                beforeTransactionList
            >
                History
            </Text>
            <ListUl>
                { transactions.map( ( transaction: IInitialData ) => (
                    <Transaction
                        key = { transaction.id }
                        transaction = { transaction }
                    />
                ) ) }
            </ListUl>
        </FlexContainerNotCentered>
    );
};