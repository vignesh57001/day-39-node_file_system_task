const express = require("express");
const app = express();
const fs = require("fs");

// file creation

fs.writeFile(
  "./current date-time.txt",
  `your current date & time is = ${new Date()}`,
  function (err) {
    if (err) throw err;
    console.log(
      "your date and time was saved.....! check on the 'current date-time.txt' file"
    );
  }
);

// reading file

fs.readFile("./current date-time.txt", "utf-8", function (err, data) {
  if (err) throw err;
  console.log(new Date());
});

// to get all the files

app.get("/allfiles", (req, res) => {
  fs.readdir("./", function (err, data) {
    if (err) throw err;
    console.log(data);
  });
  res.json(new Date());
});

app.listen(3003);
