import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'

function Expenses(props) {
    return (
        <Card className='expenses'>
            <ExpenseItem expenseData={props.data[0]}></ExpenseItem>
            <ExpenseItem expenseData={props.data[1]}></ExpenseItem>
            <ExpenseItem expenseData={props.data[2]}></ExpenseItem>
        </Card>
    )
}

export default Expenses