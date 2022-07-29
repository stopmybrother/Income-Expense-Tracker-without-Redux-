import React from "react";
import { IInitialState, IInitialData } from "../GlobalState/GlobalState";

export const AppReducer = (
                            state: IInitialState,
                            action: any
                            ) => {
    switch ( action.type ) {
        case "DELETE_TRANSACTION":
            return {
                ...state,
                transactions: state.transactions.filter( ( transaction: IInitialData ) => transaction.id !== action.payload )
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [ action.payload, ...state.transactions ]
            }
        default:
            return state;
    };
};