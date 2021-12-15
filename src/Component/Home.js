
import axios from 'axios'
import React,{useState ,useEffect} from 'react'
import NavBar from './NavBar'

export default function Home({token}) {
const [acount, setAcount] = useState([])

    return (
        <div div className="home-page">
            <NavBar token={token}/>
            
        </div>
    )
}
