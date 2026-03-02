import { useContext, useEffect } from 'react'
import { BudgetForm } from './components/BudgetForm'
import { BudgetTracker } from './components/BudgetTracker'
import ExpenseModal from './components/ExpenseModal'
import { BudgetStateContext } from './context/BudgetContexts'
import { ExpenseList } from './components/ExpenseList'
import { FilterByCategory } from './components/FilterByCategory'

function App() {
  const state = useContext(BudgetStateContext)
  const isValidBudget = Number(state.budget) > 0

  useEffect(() => {
    localStorage.setItem('budget', state.budget.toString())
  }, [state.budget])

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(state.expenses))
  }, [state.expenses])

  return (
    <div className="min-h-screen">
      <header className="bg-blue-600 py-8 max-h-72">
        <h1 className="uppercase text-center font-black text-4xl text-white">
          Planificador de gastos
        </h1>
      </header>

      <main className="max-w-3xl mx-auto py-10 px-4">
        <section className="bg-white shadow-lg rounded-lg p-10">
          {isValidBudget ? <BudgetTracker /> : <BudgetForm />}
        </section>

        {isValidBudget && (
          <section aria-label="acciones-de-gasto" className="relative">
            <FilterByCategory />
            <ExpenseList />
            <ExpenseModal />
          </section>
        )}
      </main>
    </div>
  )
}

export default App
