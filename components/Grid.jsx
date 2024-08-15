import Cell from './Cell';

export default function Grid() {
  const cells = Array.from({ length: 1000 }, (_, i) => i);

  return (
    <div className="grid grid-cols-10 gap-0 border">
      {cells.map((index) => (
        <Cell key={index} cellId={index} />
      ))}
    </div>
  );
}
