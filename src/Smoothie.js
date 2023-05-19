import {useState} from "react"

function Smoothie({smoothie}){

    const [toggle, setToggle] = useState(true)

    function handleToggle(){
        setToggle(!toggle)
    }
    
    return (
        <li className="smoothie">
            <img src={smoothie.image} alt={smoothie.name} />
            <h4>{smoothie.name}</h4>
            <p>Price:${smoothie.price}</p>
            <button onClick={handleToggle}>{toggle ? (<button className="primary">In Stock</button>) : (<button>Out of Stock</button>)}</button>
            <br/><br/>
        </li>
    )
}

export default Smoothie;