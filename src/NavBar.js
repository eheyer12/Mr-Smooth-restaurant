import {NavLink} from "react-router-dom"

function NavBar(){
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <br></br>
            <NavLink to="/add_smoothie">Add Smoothie</NavLink>
            <br></br>
            <NavLink to="/search">Search</NavLink>
            <br></br>
        </nav>
    )
}

export default NavBar;