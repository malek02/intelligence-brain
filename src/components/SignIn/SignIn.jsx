import React, { Component } from 'react';

class SignIn extends Component {
constructor(props){
  super(props);
    this.state={
      email:'',
      password:''
      }
  
}
handelchange1=(e)=>{


  this.setState({ email : e.target.value});
  
}

handelchange2=(e)=>{
  this.setState({ password : e.target.value});

}
handelSubmit=(e)=>{
  e.preventDefault()
  fetch('http://localhost:3000/signin',
  {method:'post',
  headers:{'Content-type': 'application/json'},
  body: JSON.stringify({
    email:this.state.email,
    password:this.state.password
  })
})
.then(data=>data.json())
.then(res=>{
  if(res==="succes"){this.props.onRoute('home')
  
}})


  

}


  render() {
   
    
    return (
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
        <main class="pa4 black-80">
  <form class="measure">
    <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
      <legend class="f2 fw6 ph0 mh0 ">Sign In</legend>
      <div class="mt3">
        <label class="db fw6 lh-copy f6" >Email</label>
        <input onChange={e=>this.handelchange1(e)} value={this.state.email} name="email"
        class="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email"  id="email-address"/>
      </div>
      <div class="mv3">
        <label class="db fw6 lh-copy f6" >Password</label>
        <input onChange={e=>this.handelchange2(e)} value={this.state.password} name='password'
        class="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password"   id="password"/>
      </div>
      
    </fieldset>
    <div class="">
      <input onClick={this.handelSubmit} class="b ph3 pv2 input-reset  b--black bg-transparent grow pointer f6 dib center" type="submit" value="Sign in"/>
    </div>
    <div class="lh-copy mt3 ">
      <a onClick={()=>this.props.onRoute('regestire')} href="#0" class="f6 link dim black db ">Sign up</a>
      
    </div>
  </form>
</main>
</article>
    )
  }
}



export default SignIn;