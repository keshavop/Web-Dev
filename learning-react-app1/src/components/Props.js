
function Props(props) {
    const {name,callingName} = props;
    return (
        <div>
            <h1>Hi {name} a.k.a {callingName}
            </h1>
        </div>
    );
}

export default Props;
