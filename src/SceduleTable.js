function ScheduleTable({ schedule }) {
  const scheduleData =
    typeof schedule === "string" ? JSON.parse(schedule) : schedule;
  const scheduleArray = scheduleData.schedule || [];

  if (scheduleArray.length === 0) {
    return null;
  }

  return (
    <div className="generate">
      <table className="table-draw">
        <thead className="centered">
          <tr className="">
            <th>Quarter</th>
            <th>Classes</th>
            <hr></hr>
          </tr>
        </thead>

        <tbody className="centered">
          {scheduleArray.map((quarter, index) => (
            <tr key={index}>
              <td>{quarter.quarter}</td>
              <td>{quarter.classes.map((c) => c.class_name).join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br></br>
    </div>
  );
}

export default ScheduleTable;
