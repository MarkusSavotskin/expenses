import React from "react";

import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    if (props.filteredExpenses.length === 0) {
        return <p className='expenses-list__fallback'>No expenses found.</p>
    }

    return (
        <ul className='expenses-list'>
            {
                props.filteredExpenses.map((expense) => {
                    return <ExpenseItem
                        id={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    ></ExpenseItem>
                })
            }
        </ul>
    )
}

export default ExpensesList