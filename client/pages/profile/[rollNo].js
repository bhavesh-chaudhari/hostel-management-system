import React from 'react'
import { useRouter } from 'next/router'

const Profile = () => {

    const router = useRouter()

    const rollNumber = router.query.rollNo
    
  return (
    <div>Welcome to the profile page of {rollNumber.toLocaleLowerCase()}</div>
  )
}

export default Profile