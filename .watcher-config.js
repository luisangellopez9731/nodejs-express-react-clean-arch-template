const exportCommon = require("./exportCommon");
// Define the callbacks. Available are onStart, onChange and onEnd. They all get a spawn parameter, which is a promisified version of node's child_process.spawn. The onChange callback additionally gets an events object.
const onStart = (spawn) => {
  console.log("Watcher is running...");
};

const onChange = async (events, a) => {
  if (events.change) {
    const projects = {
      toCheck: [
        {
          name: "frontend",
          dir: "./frontend/src/common/*",
          to: "./frontend/src/common",
          up: 3
        },
        { name: "backend", dir: "./backend/src/common/*", to: "./backend/src/common", up: 3 },
      ],
      default: { name: "common", dir: "./common/*", to: "./common", up: 1 },
    };
    const changeFromNoDefaultIndex = projects.toCheck.findIndex((project) =>
      new RegExp(project.name).test(events.change)
    );

    let changeFromNoDefault = null;
    if (changeFromNoDefaultIndex != -1) {
      changeFromNoDefault = projects.toCheck[changeFromNoDefaultIndex];
      projects.toCheck.splice(changeFromNoDefaultIndex, 1);
    }
    exportCommon(
      changeFromNoDefault || projects.default,
      projects.toCheck.concat(changeFromNoDefault ? [projects.default] : [])
    );
  }
};

const onEnd = (spawn) => {
  console.log("Watcher is terminating.");
};

var config = {
  directory: ["./common", "./backend/src/common", "./frontend/src/common"], // The directory which will be watched for changes. If falsy, the parent directory of this module will be watched. Can be a string or an array of strings.
  ignore: [
    // ignore can be a string, regex, function or an array containing any of them. Has to be anymatch compatible, see https://github.com/es128/anymatch
    /node_modules/,
    /\.git/,
  ],
  delay: 400, // Delay the execution of the commands on change in ms
  verbosity: "normal", // Possible values are: minimal, normal, verbose
  onStart: onStart,
  onChange: onChange,
  onEnd: onEnd,
};

module.exports = config;
