import './App.css';
import './components/ExpenseItem'
import Expenses from './components/Expenses';

function App() {

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

    return (
        <div className="App">
            <Expenses data={expenses}></Expenses>
        </div>
    )
        ;
}

export default App;
