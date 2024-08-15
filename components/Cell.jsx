import { useSpreadsheetStore } from '../state/useSpreadsheetStore';

export default function Cell({ cellId }) {
  const { cellData, searchResults, updateCellData } = useSpreadsheetStore((state) => ({
    cellData: state.data[cellId] || '',
    searchResults: state.searchResults,
    updateCellData: state.updateCellData,
  }));

  const isHighlighted = searchResults.some(([id]) => id === cellId.toString());

  const handleChange = (e) => {
    updateCellData(cellId, e.target.value);
  };

  return (
    <input
      type="text"
      className={`border p-2 text-sm w-full h-full ${isHighlighted ? 'bg-yellow-200' : ''}`}
      value={cellData}
      onChange={handleChange}
    />
  );
}
