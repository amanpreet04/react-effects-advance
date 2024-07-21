export default function Options({ options }) {
  return (
    <>
      {options.map((option) => (
        <button key={Math.random()} className="answer">
          {option}
        </button>
      ))}
    </>
  );
}
