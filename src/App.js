import './App.css';
import { getIrys } from './getIrys.js'
import { connect } from '@othent/kms'
 

function App() {


  async function login() {
    const userDetails = await connect()
    console.log(userDetails)
  }



  const uploadData = async () => {
    const webIrys = await getIrys();
    const dataToUpload = "GM world.";
    try {
      const receipt = await webIrys.upload(dataToUpload);
      console.log(`Data uploaded ==> https://gateway.irys.xyz/${receipt.id}`);
    } catch (e) {
      console.log("Error uploading data ", e);
    }
  };
	

 
	return (
    <div className="App">

      <button onClick={login}>Login</button>

      <button onClick={uploadData}>Upload Test data</button>
        
    </div>
  )
  
}
 
export default App;