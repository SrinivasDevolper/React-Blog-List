import './index.css'

const UserInformation = () => {
  return (
    <div className="user-cont">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="profile"
      />
      <h1 className="username">Wade Warren</h1>
      <p className="skill">Software Devolper at UK</p>
    </div>
  )
}

export default UserInformation
