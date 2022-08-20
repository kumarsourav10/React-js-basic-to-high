
function Student(props)
{
    console.log(props.name)
    return(
    <div style={{backgroundColor: "skyblue"}}>
        <h1>Name :{props.name}</h1>
        <h2>Address : {props.address}</h2>
        <h3>Email : {props.email}</h3>
    </div>
    )
} 










export default Student;