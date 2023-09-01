import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [values, setvalues] = useState({
    username:"",
    email:"",
    fullname:"",
    password:"",
    confirmPassword:"",
  });

  const inputs = [
    {
      id:1,
      name:"username",
      type:"text",
      placeholder:"Username",
      label:"Username"
    },
    {
      id:2,
      name:"email",
      type:"text",
      placeholder:"Email",
      label:"Email"
    },
    {
      id:3,
      name:"fullname",
      type:"text",
      placeholder:"Fullname",
      label:"Fullname"
    },
    {
      id:4,
      name:"password",
      type:"password",
      placeholder:"Password",
      label:"Password"
    },
    {
      id:5,
      name:"confirmPassword",
      type:"password",
      placeholder:"Confirm Password",
      label:"Confirm Password"
    },
  ]
  // console.log(username);
  // const usernameRef = useRef();
  
  console.log("re-render")

  function handleSubmit(e){
   e.preventDefault();
  
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        {inputs.map((input)=>(
          <Form key={input.id} {...input} />
        ))}
        
        
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
