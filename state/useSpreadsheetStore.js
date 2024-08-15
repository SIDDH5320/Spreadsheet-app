import { create } from 'zustand';

export const useSpreadsheetStore = create((set) => ({
  data: {},         // Cell data storage
  formatting: {},   // Cell formatting storage
  searchResults: [], // Store search results
  
  
  updateCellData: (cellId, value) => set((state) => ({
    data: { ...state.data, [cellId]: value },
  })),
  

  formatCells: (alignment) => set((state) => ({
    formatting: { ...state.formatting, alignment },
  })),

  search: (query) => set((state) => {
    const filtered = Object.entries(state.data).filter(([cellId, value]) =>
      value.toLowerCase().includes(query.toLowerCase())
    );
    return { searchResults: filtered };
  }),
}));
