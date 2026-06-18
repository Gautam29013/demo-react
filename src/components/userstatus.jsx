import React from 'react'

const UserStatus = (props) => {

    if(props.isLoggedIn && props.isadmin) {
        return <h1>Welcome Admin!</h1>;
    } else {
        return <h1>Welcome User!</h1>;
    }
  
}

export default UserStatus