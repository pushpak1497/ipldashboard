import './index.css'

const LatestMatch = props => {
  const {details} = props
  const {
    competingTeam,
    competingTeamLogo,
    result,
    date,
    venue,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = details
  return (
    <>
      <div className="latest-container">
        <div>
          <p>{competingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="opponent-logo"
        />
      </div>
      <div>
        <p>first innings</p>
        <p>{firstInnings}</p>
        <p>second innings</p>
        <p>{secondInnings}</p>
        <p>Man of the Match</p>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </>
  )
}
export default LatestMatch
