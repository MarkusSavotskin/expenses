import React, {useState} from "react";
import './NewExpense.css'

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {

    const [formEdit, setEditForm] = useState(false);

    const formEditHandler = () => {
        setEditForm(!formEdit)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)

    }
    if (formEdit) {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}  onSubmission={formEditHandler}></ExpenseForm>
            </div>
        )
    } else {
        return (
            <div className='new-expense'>
                <button onClick={formEditHandler}>Add New Expense</button>
            </div>
        )
    }
}

export default NewExpense