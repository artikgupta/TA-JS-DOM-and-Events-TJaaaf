let gitCommands = [
  {
    commands: "git init",
    description: "create empty git repo in a specified directory"
  },
  {
    commands: "git clone <repo>",
    description: "clone repo located at <repo> onto local machine"
  },
  {
    commands: "git config user.name <name>",
    description: "define author name to be used for all commits in current repo"
  },
  {
    commands: "git diff",
    description:
      "show unstaged changes between your index and working directory"
  },
  {
    commands: "git reset <file>",
    description:
      "remove file from the staging area but leave the working directory unchanged"
  },
  {
    commands: "git clean -n ",
    description: "shows which file would be removed from the working directory."
  },

  {
    commands: "git remote add <name> <url>",
    description:
      "create a new connection to the remote repo, after adding a remote, you can use <name> as a shortcut for url in another commands."
  },
  {
    commands: "git fetch <remote> <branch>",
    description: "fetches a specific branch from the repo."
  },
  {
    commands: "git pull <remote>",
    description:
      "fetch the specified remote's copy of current branch and immediately merged it into a local copy ."
  },
  {
    commands: "git push <remote> <branch>",
    description:
      "push the branch to <remote> along with necessary commits and objects."
  },
  {
    commands: "git log",
    description: "checks the commit history"
  },
  {
    commands: "git add <filename>",
    description: "add the files to the staging area"
  },
  {
    commands: "git commit -m ",
    description: "moves the file from staging area to the committed area"
  },
  {
    commands: "git restore --staged <filename>",
    description: "move a file from the staging area back to the working tree"
  },
  {
    commands: "git checkout <commit hash>",
    description: "go back to the state of working tree in a particular commit"
  },
  {
    commands: "git branch",
    description: "creates a new branch"
  },
  {
    commands: "git checkout <branchname>",
    description: "switches to the specific branch "
  },
  {
    commands: "git merge <branchname>",
    description: "merges the given branch to the current branch"
  },
  {
    commands: "git branch -d <branchname>",
    description: "deletes the given branch"
  },
  {
    commands: "git checkout -b <branchname>",
    description: "creates and switches to a new branch"
  }
];

//

let container = document.querySelector(".container");
let code = document.querySelector("code");
let p = document.querySelector("p");
let button = document.querySelector("button");

function getRandomNumber(num) {
  return Math.floor(Math.random() * num);
}

function handleClick() {
  let index = getRandomNumber(gitCommands.length);
  console.log(index);
  let randomCommands = gitCommands[index];
  code.innerText = randomCommands.commands;
  p.innerText = randomCommands.description;
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  code.style.backgroundColor = getRandomColor();
}

handleClick();

button.addEventListener("click", handleClick);
button.addEventListener("click", setRandomColor);
