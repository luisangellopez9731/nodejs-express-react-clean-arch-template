const watcher = require('node-watch-changes')
const exportCommon = require("./exportCommon")

exportCommon()
watcher(); // The module uses watcherConfig.js