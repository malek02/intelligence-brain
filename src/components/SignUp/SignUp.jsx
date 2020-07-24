import React, { Component } from 'react';

class SignUp extends Component {

state={

  name:'',
  email:'',
  password:'',
 


}

handelchange1=(e)=>{
  
  this.setState({ name : e.target.value});
}
handelchange2=(e)=>{
  
  this.setState({ email : e.target.value});
}
handelchange3=(e)=>{
  
  this.setState({ password : e.target.value});
}

handelSubmit=(e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/regestire',{
    method:'post',
    headers:{'Content-type': 'application/json'},
  body: JSON.stringify({
    id:'123',
    name: this.state.name,
    email:this.state.email,
    password:this.state.password
  })
  })
  .then(data=>data.json())
  .then(res=>this.props.firstApp(res[res.length-1]))
  this.props.onRoute('f');
}



  render(){
  
    return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
  <form class="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f2 fw6 ph0 mh0 ">Sign Up</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="Name">Name</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        type="email" name="email-address"  id="email-address" value={this.state.name}
          onChange={e=>this.handelchange1(e)}
        />
      </div>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" for="email-address">Email</label>
        <input class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        onChange={e=>this.handelchange2(e)}type="email"
        calue={this.state.email} name="email-address"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" for="password">Password</label>
        <input class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
        onChange={e=>this.handelchange3(e)} value={this.state.password}
        type="password" name="password"  id="password"/>
      </div>
      
    </fieldset>
    <div class="">
      <input onClick={e=>this.handelSubmit(e)} class="b ph3 pv2 input-reset  b--black bg-transparent grow pointer f6 dib center" type="submit" value="Sign Up"/>
    </div>
    <div class="lh-copy mt3 ">
      <a href="#0" class="f6 link dim black db ">Sign up</a>
      
    </div>
  </form>
</main>
</article>
    )
}
}
export default SignUp;