
// function placeX (value) { () =>
//     console.log("PlaceX");
// }

const placeX = (value) => {
    console.log(value)
}

const Square = ({value, color}) => {  
    return(
        <button 
            onClick={placeX(value)}
            style={{
                height: 50,
                width: 50,
                margin: 1,
                backgroundColor: color,
            }}
        />
    )
}

export default Square;