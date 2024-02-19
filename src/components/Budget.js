import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((sum, x) => sum + x.cost, 0);

    const handleBudgetChange = (event) => {
        let value = event.target.value;

        if (value > 20000) {
            alert("The value cannot exceed " + currency + "20,000.");
            value = 20000;
        }

        if (value < totalExpenses) {
            alert("The value cannot be lower than spending.");
            value = totalExpenses;
        }

        setNewBudget(value);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
