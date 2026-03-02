import { useContext } from 'react'
import { AmountDisplay } from './AmountDisplay'
import { BudgetDispatchContext, BudgetStateContext } from '../context/BudgetContexts'

export const BudgetTracker = () => {
  const state = useContext(BudgetStateContext)
  const dispatch = useContext(BudgetDispatchContext)

  const totalExpenses = state.expenses.reduce((total, expense) => expense.amount + total, 0)
  const remainingBudget = state.budget - totalExpenses
  const percentage = state.budget > 0 ? ((totalExpenses / state.budget) * 100).toFixed(2) : 0

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="flex justify-center items-center">
        <div className="w-44 h-44 rounded-full border-[14px] border-blue-600 flex items-center justify-center text-5xl font-bold text-blue-600">
          {percentage}%
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-8">
        <button
          onClick={() => dispatch({ type: 'reset-app' })}
          className="bg-pink-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        >
          Resetear app
        </button>

        <AmountDisplay amount={state.budget} label="Presupuesto" />
        <AmountDisplay amount={remainingBudget} label="Disponible" />
        <AmountDisplay amount={totalExpenses} label="Gastado" />
      </div>
    </div>
  )
}
