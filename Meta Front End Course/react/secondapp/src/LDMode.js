function LDMode(props){
    let text = props.isLightMode ? "Switch to Dark Mode" : "Switch to Light Mode";
    
    return (<button className={props.style} onClick={props.handler}>
        {text}
    </button>)
}

export default LDMode;