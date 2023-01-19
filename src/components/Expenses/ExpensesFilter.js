import React, {useState} from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
    const [enteredYear, setEnteredYear] = useState(2023)

    const filterYearChangeHandler = (event) => {
        setEnteredYear(event.target.value)
        props.filterYearData(enteredYear)
    }
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
                <label>Filter by year</label>
                <select onChange={filterYearChangeHandler}>
                    <option value='2023'>2023</option>
                    <option value='2024'>2024</option>
                    <option value='2025'>2025</option>
                </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;