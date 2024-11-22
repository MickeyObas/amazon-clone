import { useState, useEffect, createContext, useContext } from 'react';

export const CategoryContext = createContext();

export function CategoryProvider({children}){
    const [selectedCategory, setSelectedCategory] = useState(null);

    return (
        <CategoryContext.Provider value={{selectedCategory, setSelectedCategory}}>
            {children}
        </CategoryContext.Provider>
    )

    

}

export const useCategory = () => useContext(CategoryContext);