import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import { ContainerNotCentered } from "../../styled-components/components/Container";
import { Text } from "../../styled-components/components/Text";
import { IInitialData } from "../../context/GlobalState/GlobalState";

export const Balance = () => {
    const { transactions } = useContext( GlobalContext );
    const amounts = transactions.map( ( transaction: IInitialData ) => transaction.amount );
    const total = +amounts.reduce( ( acc: number, amount: number ) => ( acc += amount ), 0 ).toFixed( 2 );
    return (
        <ContainerNotCentered>
            <Text
                textTransform = "uppercase"
                fontWeight = { 600 }
            >
                your Balance
            </Text>
            <Text
                fontSize = { 34 }
                lineHeight = { 38 }
                fontWeight = { 700 }
            >
                { total < 0 ? "-" : "" } ${ Math.abs( total ) }
            </Text>
        </ContainerNotCentered>
    );
}