import React from "react";
import './Expenses.css'

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {

    const filterYear = (enteredFilterYear) => {
        console.log('Year data in Expenses.js: ', enteredFilterYear)
    }

    return (
        <Card className='expenses'>
            <ExpensesFilter filterYearData={filterYear}></ExpensesFilter>
            {
                props.expenseData.map((expense) => {
                    return <ExpenseItem expenseData={expense}></ExpenseItem>
                })
            }
        </Card>
    )
}

export default Expenses