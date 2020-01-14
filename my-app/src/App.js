import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import { useState } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }


  render()
  {
    return ( 

        
    // <div class="container">
    //   <div class="row">
    //     <div class="col-md-4 mt-5 mx-auto">
    //       <form >
    //       <h1 class="h3 mb-3 font-weight-normal"><b>New Opportunity</b></h1>
    //       <div class="form-group" >
    //       <input class="input1" type="text" name="first_name" placeholder=" Opportunity Name"/>
    //       </div>
    //       <div class="form-group" >
    //       <input class="input2" type="text" name="last_name" placeholder=" Opportunity ID" />
    //       </div>

    //       <div class="col text-center"><br/>
    //           <button type="submit" class="btn btn-primary">Countinue</button>
    //       </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>


    //   <div className="Login">
    //   <form onSubmit={handleSubmit}>
    //     <FormGroup controlId="email" bsSize="large">
    //       <FormLabel>Email</FormLabel>
    //       <FormControl
    //         autoFocus
    //         type="email"
    //         value={email}
    //         onChange={e => setEmail(e.target.value)}
    //       />
    //     </FormGroup>
    //     <FormGroup controlId="password" bsSize="large">
    //       <FormLabel>Password</FormLabel>
    //       <FormControl
    //         value={password}
    //         onChange={e => setPassword(e.target.value)}
    //         type="password"
    //       />
    //     </FormGroup>
    //     <Button block bsSize="large" disabled={!validateForm()} type="submit">
    //       Login
    //     </Button>
    //   </form>
    // </div>



    // <body>
    // <div class="container">
    //   <div class="row">
    //     <div class="col-md-4 mt-5 mx-auto" style="border:1px solid black; padding:60px 60px;" >
    //       <form action="/home" method="post">
    //       <div><h1><p class="text-center"><img src="../assets/LOGO_1.png"/>Return</p></h1></div>

    //       <div class="md-form">
    //         <input type="text" id="form1" class="form-control"/>
    //         <label for="form1">Email</label>
    //       </div>

    //       <div class="md-form">
    //         <input type="text" id="form2" class="form-control"/>
    //         <label for="form2">password<span><i class="fa fa-eye"></i></span></label>
    //       </div>

    //       <button type="submit" class="btn btn-lg btn-secondary btn-block"  >Login</button>
    //       <br/>
    //       <br/>
    //       <div>
    //       <a href="url"><u>Forgot your password?</u></a>
    //       </div>

    //       </form>
    //     </div>
    //   </div>
    // </div>
    // </body>
    <h1>hii Shubhaa</h1>
);
  }
 
}

export default App;
