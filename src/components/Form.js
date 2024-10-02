import React, {useState} from 'react'

function Form() {
    const [isMouseOver, setMouseOver] = useState(false);
    const [userDetails, setDetails] = useState({
      name: "",
      email: "",
      password: "",
    });
    const processLogin =(event) =>{
     
      }
  return (
    <div className="regContainer">
      <h1>Login</h1>
      <p>{userDetails.name + userDetails.email + userDetails.password}</p>
      <form onSubmit={processLogin}>
        <div>
          <input
            onChange={e=>{setDetails({...userDetails, name: e.target.value}) }}
            name="name"
            // value={userDetails.name}
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div>
          <input
            onChange={e => setDetails({...userDetails, email: e.target.value})}
            name="email"
            // value={userDetails.email}
            type="text"
            placeholder="Date of Birth"
          />
        </div>
        <div>
          <input
            onChange={e => setDetails({...userDetails, password: e.target.value})}
            name="password"
            // value={userDetails.password}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          style={{ backgroundColor: isMouseOver ? "black" : "white" }}
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Form