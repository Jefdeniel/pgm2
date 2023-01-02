// The node:path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require("path");
const util = require("util");
const v8 = require("v8");

// The path.basename() method returns the last portion of a path, similar to the Unix basename command. Trailing directory separators are ignored, see path.sep.

const dirUploads = path.join(__dirname, "www", "files", "uploads");
console.log(dirUploads);
// Prints: /Users/mjr/work/nodejs-in-action/ch03/03_03/finished/www/files/uploads

// The path.dirname() method returns the directory name of a path, similar to the Unix dirname command.

// util.log(path.basename(__filename));
// util.log("^ The name of the current file");
// util.log(v8.getHeapStatistics());

const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
