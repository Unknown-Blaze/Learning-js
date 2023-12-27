function FruitsCounter(props) {
    const style = {
        "border": "1px solid black",
        "display": "inline",
        "padding": "10px"
    }
    
    return (
        <h2 style={style}>Total fruits: {props.fruits.length}</h2>
    )
}

export default FruitsCounter;