import Smoothie from "./Smoothie"

function SmoothieList({smoothies, increaseLikes}){

    const smoothieComponents = smoothies.map(smoothie => {
        return <Smoothie key={smoothie.id} smoothie={smoothie} increaseLikes={increaseLikes} />
    })

    return (
        <ul className="smoothie-list">{smoothieComponents}</ul>
    )
}

export default SmoothieList;