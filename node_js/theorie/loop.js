// Loop with colors
let tempStr = "";
for (let b = 0; b < 8; b++) {
  for (let t = 0; t < 8; t++) {
    tempStr += `\x1b[1;3${t}m\x1b[4${b}m${"Onmiddelijk"}\x1b[0m\t`;
  }
  tempStr += `\n`;
}
console.log(tempStr);
