import './App.css';
import myWonderfulImage from "./jsxsource.png";
import myWonderfulVideo from "./tuto.mp4";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{borderStyle:'solid' ,borderSize:1 ,borderColor:'black' ,maxWidth:'100vw'}}>

      <h1 className="title red">AMRI BOUTHEINA</h1>

      <br/>
 
 <img style={{width:350 ,height:250 }}  src={myWonderfulImage} alt ='jsxsource' />


 <br/>
<img style={{width:350 ,height:250 }} src='/jsxpublic.png' alt='jsxpublic' />
</div>
<video style={{height:240 ,width:320}} controls autostart autoPlay src={myWonderfulVideo} type="video/mp4"  />


      </header>
    </div>
  );
}

export default App;