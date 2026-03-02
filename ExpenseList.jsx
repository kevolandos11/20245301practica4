import { useContext } from 'react'
import { categories } from '../data/categories'
import { BudgetDispatchContext } from '../context/BudgetContexts'

export const ExpenseDetails = ({ expense }) => {
  const dispatch = useContext(BudgetDispatchContext)
  const categoryInfo = categories.find((cat) => cat.id === expense.category)

  const formattedDate = expense.date
    ? new Date(expense.date).toLocaleDateString('es-ES', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Fecha no disponible'

  return (
    <div className="bg-white shadow-lg p-6 w-full border-b border-gray-200 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-bold uppercase text-slate-500">{categoryInfo?.name}</p>
        <p className="text-lg font-semibold">{expense.expenseName}</p>
        <p className="text-slate-600 text-sm">{formattedDate}</p>
      </div>

      <div className="text-right space-y-2">
        <p className="text-2xl text-blue-600 font-bold">
          <span className="font-black text-black">${expense.amount}</span>
        </p>
        <div className="flex gap-2 justify-end">
          <button
            type="button"
            onClick={() => dispatch({ type: 'get-expense-by-id', payload: { id: expense.id } })}
            className="bg-blue-600 text-white px-3 py-1 rounded"
          >
            Editar
          </button>
          <button
            type="button"
            onClick={() => dispatch({ type: 'remove-expense', payload: { id: expense.id } })}
            className="bg-pink-600 text-white px-3 py-1 rounded"
          >
            Eliminar
          </button>
        </div>
      </div>
    </div>
  )
}
