function Heading(props) {
    let name = props.name ? props.name : "User";
    return (<h1>
        Hello {name}!
    </h1>);
};

export default Heading;
