import React from "react";
import "./App.css";
import { Command } from "@tauri-apps/api/shell";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

const printEvent = new Event("print-hello");
window.addEventListener("print-hello", () => console.log("Hello"));
function App() {
  const pri = () => window.dispatchEvent(printEvent);
  async function execute(index: number) {
    const command = Command.sidecar("external/binaries/raffle-editor", [
      "--cost",
      "500",
      "--date",
      "Jueves 22 Febrero / 2022",
      "--prize",
      "350.000",
      "--encerrado",
      "3.000",
      "--number",
      "456",
      "--lottery-1",
      "Chontico",
      "--lottery-2",
      "Dia",
      "--save-dir",
      "./external/assets/result.svg",
      "--save-image-dir",
      `./external/assets/imgs/result-${index}.png`,
      "--template-dir",
      "./external/assets/raffle-default-template.svg",
    ]);
    const output = await command.execute();
    console.log(output);
    console.log(index);
  }

  let realIndex = 1
  const b = async () => {
    realIndex = 0;
    for (let index = 0; index < 10; index++) {
      for await (const iterator of [1,2,3,4,5,6,7,8]) {
        
        await c(realIndex);
        console.log(iterator.toString()); 
      }
    }
  };

  const c = async (index: number) => {
      execute(index)  
      execute(index + 1)  
      execute(index + 2)  
      execute(index + 3) 
      execute(index + 5)  
      execute(index + 6)  
      execute(index + 7)  
      execute(index + 8)  
      realIndex = index + 8;
  };

  return (
    <div className="App">
      <PrimaryButton onClick={b}>Hola mi panita</PrimaryButton>
      <DefaultButton onClick={pri}>Default</DefaultButton>
    </div>
  );
}

export default App;
