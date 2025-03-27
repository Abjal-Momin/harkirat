const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program.name("counter").description("count files").version("0.8.1");

program
  .command("count")
  .argument("<file>, files to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const count = data.split(" ").length;
        console.log(count);
      }
    });
  });
program.parse();

program
  .command("count")
  .description("The file word count")
  .argument("<file>, files to count")
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const count = data.split(" ").length;
        console.log(count);
      }
    });
  });
program.parse();




// const fs = require("fs");

// function file(file) {
//   fs.readFile(file, "utf-8", (err, data) => {
//     let space = 0;
//     for (let i = 0; i < data.length; i++) {
//       if (data[i] === " ") {
//         space++;
//       }
//     }
//     console.log(space + 1);

//   });
// }
// file('a.txt');
// file(process.argv[2]);
