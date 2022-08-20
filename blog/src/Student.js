
function Student(props)
{
    console.log(props.name)
    return(
    <div style={{backgroundColor: "skyblue"}}>
        <h1>Name :{props.allinone.name}</h1>
        <h2>Address : {props.allinone.address}</h2>
        <h3>Mobile : {props.allinone.Mobile}</h3>
        <h4>Height : {props.allinone.Height}</h4>
        <h4>Weight : {props.allinone.Weight}</h4>
    </div>
    )
} 










export default Student;