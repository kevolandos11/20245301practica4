import { useReducer } from 'react'
import { budgetReducer, initialState } from '../reducers/budget-reducer'
import { BudgetDispatchContext, BudgetStateContext } from './BudgetContexts'

export const BudgetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState)

  return (
    <BudgetStateContext.Provider value={state}>
      <BudgetDispatchContext.Provider value={dispatch}>
        {children}
      </BudgetDispatchContext.Provider>
    </BudgetStateContext.Provider>
  )
}
