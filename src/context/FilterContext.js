import { createContext, useContext } from 'react';

const filterInitialState = {
  productList: [],
  onlyInStock: false,
  bestSellerOnly: false,
  sortBy: null,
  rating: null,
};

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const value = {
    productList: [1, 2, 3],
  };
  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  return context;
};
