// progress bar component showing users that something is happening when the schedule is generated
function ProgressBar() {
  const text =
    ".. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. .. ..";
  const letters = text.split("");

  return (
    <div className="progress-bar-center">
      <p className="progress-bar-center">
        Please wait while your schedule is generated
      </p>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="letter"
          style={{ animationDelay: `${index * 0.15}s` }}
        >
          {letter === " " ? " " : letter}
          {""}
          {/* Replace space with Unicode non-breaking space */}
        </span>
      ))}
    </div>
  );
}

export default ProgressBar;
