const { Command } = require("commander");
const program = new Command();

// Would have to pass the username to this function in order to manage the user activity
function showOptions() {
  program
    .name("Github user activity")
    .description("CLI to show user activities across github repos");

  program
    .command("show")
    .description("shows user activity across specified repository")
    .option("-s")
    .argument("<username>", "string to split")
    .action((str, options) => {
      // Since the logic is going to be here, could be another function passed here,
      // which will show the user activity requested by the user. 
      const limit = options.first ? 1 : undefined;
      console.log(options);
      // console.log(str.split(options.separator, limit));
    });

  program.parse();
}

showOptions()
