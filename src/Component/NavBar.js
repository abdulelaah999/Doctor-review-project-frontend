import React from 'react'
import { Link } from 'react-router-dom'
import{ RateDr} from 'react-icons/'
import{ BsPersonSquare} from 'react-icons/'
import{ AiOutlinePoweroff} from 'react-icons/'
import{ AiFillLike} from 'react-icons/'


export default function NavBar(props) {

    return (
        <div className='Navbar'>
            {
                <Link to="/home" className="home-logo"><RateDr/></Link>
            }

{
                props.token? <ul className="nav-span">
                {/*  className="nav-span" */}
               <li> <Link to="/users" className="nav-link">
                    <BsPersonSquare/>  Accounts
                </Link>
                </li>
                <li>
                <Link to="/" onClick={()=>{
                // props.setToken("")
                localStorage.setItem("token", "")
                }} className="nav-link"><AiOutlinePoweroff/>  Log out</Link></li>
                <li>
                <Link to="/favorite" className="nav-link"><AiFillLike/>  Likes</Link>
                </li>
                </ul>
                     : 
                     <ul>
                    <li className="nav-span">
                    <Link to="/" className="nav-link">  Log in</Link>
                    </li>
                    {console.log(props.token)}
                    <li className="nav-span">
                    <Link to="/signup" className="nav-link">  Sign up</Link>
                    </li>
                </ul>
            }
        </div>
    )
}
