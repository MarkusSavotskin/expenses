import './App.css';

import './components/Expenses/ExpenseItem'
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
    const expenses = [
        {
            date: new Date(2023, 0, 10),
            title: 'New book',
            price: 30.99
        },
        {
            date: new Date(2023, 0, 5),
            title: 'Ice cream',
            price: 3.99
        },
        {
            date: new Date(2023, 0, 2),
            title: 'New jeans',
            price: 99.99
        }
    ]
    const addExpenseHandler = (expense) => {
        console.log('In App.js')
        console.log(expense)
    }

    return (
        <div className="App">
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses data={expenses}></Expenses>
        </div>
    );
}

export default App;
