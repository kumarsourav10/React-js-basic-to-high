function Teacher(props)
{
    console.log(props)
    return(
        <div style={{backgroundColor: "skyblue", margin:10}}>
            <h1>Hello{props.name}</h1>
            <h2>Email : {props.email}</h2>
            <h3>Address : {props.address}</h3>
            <h4>Height : {props.other.height}</h4>
            <h4>Weight : {props.other.weight}</h4>
            
            
        </div>
    )
}

export default Teacher;