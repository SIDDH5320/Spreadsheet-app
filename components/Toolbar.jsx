import { useSpreadsheetStore } from '../state/useSpreadsheetStore';

export default function Toolbar() {
  const { formatCells, search, searchResults } = useSpreadsheetStore();

  const handleSearch = (e) => {
    search(e.target.value);
  };

  return (
    <div className="p-4">
      <div className="flex justify-between mb-4">
        <div className="space-x-2">
          <button onClick={() => formatCells('left')} className="px-4 py-2 bg-gray-200">
            Align Left
          </button>
          <button onClick={() => formatCells('center')} className="px-4 py-2 bg-gray-200">
            Align Center
          </button>
          <button onClick={() => formatCells('right')} className="px-4 py-2 bg-gray-200">
            Align Right
          </button>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search..."
            onChange={handleSearch}
            className="border p-2"
          />
        </div>
      </div>

      {/* Display Search Results */}
      {searchResults.length > 0 && (
        <div className="bg-white p-4 border rounded shadow">
          <h3 className="text-lg font-semibold mb-2">Search Results:</h3>
          <ul>
            {searchResults.map(([cellId, value]) => (
              <li key={cellId}>
                <strong>Cell {cellId}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
