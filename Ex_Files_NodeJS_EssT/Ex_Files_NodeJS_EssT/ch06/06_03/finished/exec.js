const cp = require("child_process");

cp.exec("node readStream", (err, data, stderr) => {
  console.log(data);
});
