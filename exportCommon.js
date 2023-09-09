const copyfiles = require("copyfiles");

const exportCommon = (changeFrom, changeTo) => {
  try {
    changeTo.forEach((changeToDir) => {
      copyfiles(
        [changeFrom.dir, changeToDir.to],
        {
          all: true,
          verbose: true,
          up: changeFrom.up
        },
        () => {
          console.log(`copied ${changeFrom.dir} to ${changeToDir.name}`);
        }
      );
    });
  } catch (err) {
    console.log(err);
  }

  //   copyfiles(
  //     [changeFrom.dir, changeTo],
  //     {
  //       all: true,
  //       verbose: true,
  //     },
  //     () => {
  //       console.log("copied common to backend");
  //     }
  //   );

  //   copyfiles(
  //     ["./common/*", "./frontend/src"],
  //     {
  //       all: true,
  //       verbose: true,
  //     },
  //     () => {
  //       console.log("copied common to frontend");
  //     }
  //   );

  //   copyfiles(
  //     ["./common/*", "./backend/src"],
  //     {
  //       all: true,
  //       verbose: true,
  //     },
  //     () => {
  //       console.log("copied common to backend");
  //     }
  //   );

  //   copyfiles(
  //     ["./common/*", "./frontend/src"],
  //     {
  //       all: true,
  //       verbose: true,
  //     },
  //     () => {
  //       console.log("copied common to frontend");
  //     }
  //   );
};

module.exports = exportCommon;
