import React from "react";
import "./App.css";
import { Command } from "@tauri-apps/api/shell";
import { DefaultButton, PrimaryButton } from "@fluentui/react";

function App() {
  async function execute() {
    const command = Command.sidecar("external/binaries/raffle-editor");
    const output = await command.execute();
    console.log(output);
    
  }

  return (
    <div className="App">
      <PrimaryButton onClick={execute}>Hola mi panita</PrimaryButton>
      <DefaultButton>Default</DefaultButton>
    </div>
  );
}

export default App;
