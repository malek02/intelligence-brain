import React, { Component } from 'react';
import Navigation from './components/navigation/Navigation'
import './App.css';
import  Clarifai from 'clarifai'
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import Facedetect from './components/FaceDetect/Facedetect'




const app = new Clarifai.App({
 apiKey: '928e3a21bf75473cac8a8e137f22cae5'
});






class App extends Component{
state={
  currentuser:"https://static.lexpress.fr/medias_1437/w_480,h_270,c_fill,g_north/v1404810606/billy-the-kid_736031.jpg",
  Url:'',
  box:{}
}
calculateFace= (event)=>{
  const calirifai =  event.outputs[0].data.regions[0].region_info.bounding_box;
  console.log('777',calirifai);
  const image= document.getElementById('imagebox');
  console.log('image',image)
  const width = Number(image.width);
  console.log('width',width)
  const height = Number(image.height);
  console.log('height',height)
  
  return  {
    leftcol: calirifai.left_col*width,
    topRow: calirifai.top_row*height,
    rightcol:width-(calirifai.right_col*width),
    bottom:height-(calirifai.bottom_row*height)
  }
}


  handelchange=(e)=>{
    this.setState({currentuser:e.target.value});
   
  }
  handelsubmit=(e)=>{
    this.setState({Url:this.state.currentuser});
  
    app.models.predict("a403429f2ddf4b49b307e318f00e528b",this.state.currentuser )
    .then(response=> this.setState({box:this.calculateFace(response)}) )
        
                                                              // do something with response
   
    
   .catch(err=>console.log(err)) 

  
this.setState({currentuser:''})  }

  render() {
    console.log("box",this.state.box)
  return(
    <div >
      <Particles className='practice' />
      <Navigation />
      
      <Logo />
      <Rank/>
      <ImageLinkForm handelchange={e=>this.handelchange(e)}
      handelsubmit={e=>this.handelsubmit(e)}
      item={this.state.currentuser} />
      <Facedetect  box={this.state.box} url={this.state.Url} />
    </div>
  );
}
}

export default App;
