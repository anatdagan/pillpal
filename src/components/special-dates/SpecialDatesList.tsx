export function SpecialDatesList({dateRanges}: {dateRanges: [string, string, string][]}) {
    if (dateRanges.length === 0) {
        return <p>אין תאריכים מיוחדים</p>;
    }
  return (
    <div className="special-dates-list">
        <h2>תאריכים מיוחדים</h2>
      {dateRanges.map((dateRange) => (
        <div key={dateRange.join("-")}>
          <p>{dateRange[0]}     עד {dateRange[1]}</p>
          <p>{dateRange[2]}</p>
        </div>
      ))}
    </div>
  );
}