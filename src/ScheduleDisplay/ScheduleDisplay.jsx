import QuarterCard from "./QuarterCard";

function ScheduleDisplay({ schedule }) {
  const scheduleData =
    typeof schedule === "string" ? JSON.parse(schedule) : schedule;
  const scheduleArray = scheduleData.schedule || [];

  if (scheduleArray.length === 0) {
    return null;
  }
  return (
    <div className="schedule-display">
      {scheduleArray.map(({ quarter, classes }, index) => (
        <QuarterCard
          key={index}
          quarter={quarter}
          classes={classes.map((c) => c.class_name)}
        />
      ))}
    </div>
  );
}

export default ScheduleDisplay;
