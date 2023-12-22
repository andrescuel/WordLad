import KeyboardRow from "./KeyboardRow";

export default function Keyboard() {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Enter", "Z", "X", "C", "V", "B", "N", "M", "Backspace"],
  ];

  return (
    <div className="flex flex-col space-y-1 max-w-[95%]">
      {rows.map((row, i) => {
        return <KeyboardRow key={i} keys={row}/>;
      })}
    </div>
  );
}
