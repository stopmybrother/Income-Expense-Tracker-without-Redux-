import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState/GlobalState";
import { ListLi } from "../../styled-components/components/List";
import { Span } from "../../styled-components/components/Text";
import { DeleteButton } from "../../styled-components/components/Button";
import { IInitialData } from "../../context/GlobalState/GlobalState";

interface ITransaction {
    key: number;
    transaction: IInitialData;
};

export const Transaction = (
                            {
                                transaction
                            }: ITransaction
                        ) => {
    const [ isShown, setIsShown ] = useState( false );
    const { deleteTransaction } = useContext( GlobalContext );
    return (
        <ListLi
            onMouseEnter = { () => setIsShown(true) }
            onMouseLeave = { () => setIsShown(false) }
            status = { transaction.amount < 0 ? "expense" : "income" }
        >
            { transaction.text }
            <Span>
                { transaction.amount < 0 ? "-" : "+" } ${ Math.abs( transaction.amount ) }
            </Span>
            { isShown &&
                <DeleteButton
                    onClick = { () => deleteTransaction && deleteTransaction(transaction.id) }
                >
                    x
                </DeleteButton>
            }
        </ListLi>
    );
};