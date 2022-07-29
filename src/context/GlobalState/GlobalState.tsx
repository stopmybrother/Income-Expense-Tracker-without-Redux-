import React, { createContext, useReducer } from "react";
import { AppReducer } from "../AppReducer/AppReducer";

export interface IInitialData {
    id: number;
    text: string;
    amount: number;
};
export interface IInitialState {
    transactions: IInitialData[];
    deleteTransaction?: ( id: number ) => void;
    addTransaction?: (transaction: IInitialData) => void;
};

const initialState: IInitialState = {
    transactions: []
};

export const GlobalContext = createContext( initialState );

export const GlobalProvider = (
                                {
                                    children
                                }: Record<any, any>
                                    ) => {
    const [ state, dispatch ] = useReducer( AppReducer, initialState );
    const deleteTransaction = ( id: number ) => {
        dispatch( {
            type: "DELETE_TRANSACTION",
            payload: id,
        } );
    };
    const addTransaction = ( transaction: IInitialData ) => {
        dispatch( {
            type: "ADD_TRANSACTION",
            payload: transaction,
        } );
    };
    return (
        <GlobalContext.Provider
            value = {
                {
                    transactions: state.transactions,
                    deleteTransaction,
                    addTransaction
                }
            }
        >
            { children }
        </GlobalContext.Provider>
    )
};