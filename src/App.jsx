

import { useState } from 'react';
import './App.css';
import ExpenseList from './components/ExpenseList';
import ExpenseFilter from './components/ExpenseFilter';
import ExpenseForm from './components/ExpenseFrom';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, category: 'tour', description: 'test..', amount: 100 },
    { id: 2, category: 'utility bill', description: 'test..', amount: 100 },
    { id: 3, category: 'personal bill', description: 'test..', amount: 14340 },
  ]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const filteredExpenses =
    selectedCategory === 'All' || selectedCategory === ''
      ? expenses
      : expenses.filter(data => data.category === selectedCategory);

  return (
    <>
      <section className="max-w-4xl mx-auto mt-10">
        <ExpenseForm
          onSubmit={data =>
            setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
          }
          onSelectedCategory={(category)=> selectedCategory(category)}
        />

      
        <ExpenseFilter
          onSelectedCategory={category => setSelectedCategory(category)}
        />
        <ExpenseList
          expenses={filteredExpenses}
          onDelete={id => setExpenses(expenses.filter(data => data.id !== id))}
        />
      </section>
    </>
  );
}

export default App;
