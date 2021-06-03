import React from 'react'
import { useRouter } from 'next/router';

const Notes = () => {
    const router = useRouter()
    const { params } = router.query
    console.log(params)
    return (
        <div>
           <h1>This is Note{params}</h1> 
        </div>
    )
}

export default Notes
