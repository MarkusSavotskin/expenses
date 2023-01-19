import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <ExpensesFilter></ExpensesFilter>
            <ExpenseItem expenseData={props.data[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.data[1]}></ExpenseItem>
            <ExpenseItem expenseData={props.data[2]}></ExpenseItem>
        </Card>
    )
}

export default Expenses