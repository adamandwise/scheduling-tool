import ClassComponent from "./ClassComponent";

function QuarterCard({ quarter, classes }) {
  return (
    <div className="quarter-card">
      <h3>{quarter}</h3>
      <hr></hr>
      <div className="generate-class">
        {classes.map((className, index) => (
          <ClassComponent key={index} className={className} />
        ))}
      </div>
    </div>
  );
}

export default QuarterCard;
