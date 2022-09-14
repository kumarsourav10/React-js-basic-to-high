// import React,{useState } from 'react'

// function Login() {
//   const[user, setUSer]=useState("");
//   const[password, setPassword]=useState("");
//   const[userErr, setUserErr]= useState(false);
//   const[passErr, setPassErr]= useState(false);
//   function loginHandle(e)
//   {
//     alert("Hello")
//     e.preventDefault()
//   }

//   function userHandler(e) {

//     // This is the validation
//     let item=e.target.value;
//     if(item.length < 3)
//     {
//       setUserErr(true);
//     }
//     else
//     {
//       setUserErr(false);
//     }

//   function passwordHandler(e) {

//     // This is the validation
//     let item=e.target.value;
//     if(item.length < 3)
//     {
//       setPassErr(true);
//     }
//     else
//     {
//       setPassErr(false);
//     }
//   }
    
//   return(
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={loginHandle}>
//         <input type="text" placeholder="Enter User Id"onChange={userHandler} />
//         {userErr?<span>User Not Valid</span>:""}
//         <br/><br/>
//         <input type="text" placeholder="Enter User Password" onChange={passwordHandler}/>
//         {userErr?<span>User Not Valid</span>:""}
//         <br/><br/>
//         <button type='Sbumit'>Login</button>
//       </form>
//     </div>
//   )
// }
