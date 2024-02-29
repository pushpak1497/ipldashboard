import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {teamsList: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({
      teamsList: updatedData,
      isLoading: false,
    })
  }

  render() {
    const {teamsList, isLoading} = this.state
    return isLoading ? (
      <div testid="loader">
        <Loader />
      </div>
    ) : (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="
https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {teamsList.map(each => (
            <TeamCard details={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Home
