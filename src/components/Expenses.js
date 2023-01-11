import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
    return (
        <div className='expenses'>
            <ExpenseItem expenseData={props.data[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.data[1]}></ExpenseItem>
            <ExpenseItem expenseData={props.data[2]}></ExpenseItem>
        </div>
    )
}

export default Expenses