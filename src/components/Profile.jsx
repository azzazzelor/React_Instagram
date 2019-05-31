import React from 'react'
import User from './User'
import Palette from './Palette'
const Profile = () =>{
        return(
            <div className="container profile">
                <User
                    src="https://encrypted-tbn0.gstatic.com/
                    images?q=tbn:ANd9GcS490s3IOl6xPwEqwMx5PkNsPMo58TtUc9Fb0_SczsOh5gopDrBnA"
                    alt="Man"
                    name="some_name">
                    </User>
                <Palette/>
            </div>
        )
}
export default Profile