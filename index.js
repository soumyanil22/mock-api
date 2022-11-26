const { exec } = require("child_process");
// Set port (default: 3000). For Heroku, we need to use// the port set by the environment variable $PORTconst port = process.env.PORT || 3000;
const port = process.env.PORT || 3000;
const command = `json-server --watch db.json --port ${port}`;
exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log("Error running exec", err);
    return;
  }
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
});
