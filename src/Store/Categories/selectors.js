import { createSelector } from '@reduxjs/toolkit'

// Entrada: los productos y las categorías
const selectProducts = state => state.products.products
const selectCategories = state => state.categories.categories

// Selector memoizado que devuelve cada categoría con sus productos
export const selectCategoriesWithProducts = createSelector(
  [selectCategories, selectProducts],
  (categories, products) => {
    return categories?.map(category => ({
      ...category,
      products: products.filter(product => product.fk_category === category.id)
    }))
  }
)
