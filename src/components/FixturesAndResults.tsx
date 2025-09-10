
interface Match {
  date: string;
  teams: string;
  location: string;
  result?: string;
}

const upcomingMatches: Match[] = [
  { date: "2025-12-10", teams: "superstars vs fishers", location: "fishers stadium" },
  { date: "2025-12-15", teams: "superstars vs Goal breakers", location: "kathuri stadium" },
  { date: "2025-12-20", teams: "superstars vs fishers", location: "Superstars stadium" },
];

const pastResults: Match[] = [
  { date: "2025-08-20", teams: "superstars vs Goal breakers", location: "superstars stadium", result: "3-0" },
  { date: "2025-08-10", teams: "superstars vs kimela", location: "Superstars stadium", result: "3-0" },
  { date: "2025-08-15", teams: "superstars vs Goal breakers", location: "kathuri stadium", result: "0-1" }
];

function FixturesAndResults() {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Upcoming Fixtures</h2>
      <ul className="mb-8">
        {upcomingMatches.map((match, idx) => (
          <li key={idx} className="mb-4 p-4 bg-white rounded shadow">
            <div className="font-semibold">{match.teams}</div>
            <div className="text-sm text-gray-500">{match.date} | {match.location}</div>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mb-4 text-indigo-700">Results</h2>
      <ul>
        {pastResults.map((match, idx) => (
          <li key={idx} className="mb-4 p-4 bg-white rounded shadow">
            <div className="font-semibold">{match.teams}</div>
            <div className="text-sm text-gray-500">{match.date} | {match.location}</div>
            <div className="text-green-600 font-bold">Result: {match.result}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FixturesAndResults;
