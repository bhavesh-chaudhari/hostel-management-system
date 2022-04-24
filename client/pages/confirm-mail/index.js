import React from 'react'
import {useRouter} from "next/router"

const index = () => {

    const router = useRouter()

    console.log(router.pathname)
    
  return (
    <div>confirmMail</div>
  )
}

export default index