import { Command } from "@tauri-apps/api/shell";

export async function execute(index: string) {
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
    ]).execute();

  
}

export function printMessage(data: string) {
  return `Hello ${data}`
}