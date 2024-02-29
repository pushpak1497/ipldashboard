import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {
    latestDetails: [],
    recentMatches: [],
    teamBannerImage: '',
    isLoading: true,
  }

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
      teamBannerUrl: data.team_banner_url,
    }
    const {latestMatchDetails, recentMatches, teamBannerUrl} = updatedData
    console.log(recentMatches)
    const updatedMatches = recentMatches.map(each => ({
      competingTeam: each.competing_team,
      competingTeamLogo: each.competing_team_logo,
      date: each.date,
      matchStatus: each.match_status,
      id: each.id,
      firstInnings: each.first_innings,
      secondInnings: each.second_innings,
      manOfTheMatch: each.man_of_the_match,
      venue: each.venue,
      result: each.result,
      umpires: each.umpires,
    }))

    const updatedDetails = {
      competingTeam: latestMatchDetails.competing_team,

      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      venue: latestMatchDetails.venue,
      result: latestMatchDetails.result,
      umpires: latestMatchDetails.umpires,
    }

    this.setState({
      latestDetails: updatedDetails,
      recentMatches: updatedMatches,
      teamBannerImage: teamBannerUrl,
      isLoading: false,
    })
  }

  render() {
    const {
      latestDetails,
      recentMatches,
      teamBannerImage,
      isLoading,
    } = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader />
      </div>
    ) : (
      <div>
        <img src={teamBannerImage} alt="team banner" />
        <LatestMatch details={latestDetails} />
        <ul className="matches-list-container">
          {recentMatches.map(each => (
            <MatchCard matchDetails={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default TeamMatches
