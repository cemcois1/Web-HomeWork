import React, {useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import NewExpense from "./NewExpense";

const NewExpenseOpener = (props) => {
    const [isOpenerVisible, setOpenerVisible] = useState(true)
    return (<div className='new-expense'>
        {isOpenerVisible ?

            <button onClick={() => {

                setOpenerVisible(false)
            }}>Add Expense</button>

            :
            < NewExpense onAddExpense={props.onAddExpense} setOpenerVisible={setOpenerVisible}/>}


    </div>)
};

export default NewExpenseOpener;