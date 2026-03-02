import { useContext } from 'react'
import { categories } from '../data/categories'
import { BudgetDispatchContext, BudgetStateContext } from '../context/BudgetContexts'

export const FilterByCategory = () => {
  const dispatch = useContext(BudgetDispatchContext)
  const { currentCategory } = useContext(BudgetStateContext)

  const handleChange = (e) => {
    dispatch({ type: 'add-filter-category', payload: { categoryId: e.target.value } })
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mt-10">
      <form>
        <div className="flex flex-col md:flex-row md:items-center gap-5">
          <label htmlFor="category" className="font-bold">
            Filtrar gastos:
          </label>
          <select
            id="category"
            className="bg-slate-100 p-2 flex-1 rounded"
            value={currentCategory}
            onChange={handleChange}
          >
            <option value="">-- Todas las categorías --</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </form>
    </div>
  )
}
