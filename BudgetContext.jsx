import { useContext } from 'react'
import { BudgetDispatchContext, BudgetStateContext } from '../context/BudgetContexts'
import { ExpenseForm } from './ExpenseForm'

export default function ExpenseModal() {
  const { modal } = useContext(BudgetStateContext)
  const dispatch = useContext(BudgetDispatchContext)

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => dispatch({ type: 'show-modal' })}
          className="bg-blue-600 text-white rounded-full w-16 h-16 text-4xl leading-none"
        >
          +
        </button>
      </div>

      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
          <div className="w-full max-w-3xl bg-white p-6 rounded-2xl shadow-xl transition-all relative">
            <button
              type="button"
              onClick={() => dispatch({ type: 'close-modal' })}
              className="absolute top-2 right-3 text-2xl"
            >
              ×
            </button>
            <ExpenseForm />
          </div>
        </div>
      )}
    </>
  )
}
