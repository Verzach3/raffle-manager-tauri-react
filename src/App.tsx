import React, { useEffect } from "react";
import "./App.css";
import { PrimaryButton } from "@fluentui/react";
import { createWorkerFactory, useWorker } from "@shopify/react-web-worker";

const factoryImageCreator = createWorkerFactory(() => import("./imageworker"))
function App() {


  const imageWorker = useWorker(factoryImageCreator);

  useEffect(() => {
    (async () => {
        const imageworkerMessage = await imageWorker.printMessage("Gabriel")
        console.log(imageworkerMessage);
        
    })();
    
    return () => {
      console.log("Unmounted");
       
    }
  }, [imageWorker])
  

  return (
    <div className="App">
      <PrimaryButton onClick={() => imageWorker.execute("Test") }>Hola mi panita</PrimaryButton>
    </div>
  );
}

export default App;
