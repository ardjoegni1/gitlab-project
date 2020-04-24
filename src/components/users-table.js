import React from "react"
import PropTypes from "prop-types"

const tableStyles = {
  width: '50%;',
  border: '2'
}

const userProfileLink = (nickname) => {
  return `https://gitlab.com/${nickname.replace('@', '')}`
}

const UsersTable = ({ users }) => (
  <table style={tableStyles}>
    <tr>
      <th>First-Name</th>
      <th>Last-Name</th>
      <th>Gitlab User</th>
    </tr>
    <tbody>
      {
        users.map(user => {
          return (
            <tr>
              <td>{ user.fname }</td>
              <td>{ user.lname }</td>
              <td><a href={userProfileLink(user.nickname)}>{ user.nickname }</a></td>
            </tr>
          )
        })
      }
    </tbody>
  </table>
)

UsersTable.propTypes = {
  users: PropTypes.array,
}

UsersTable.defaultProps = {
  users: [],
}

export default UsersTable
