const path = require("path");
const { log } = require("util");
const { getHeapStatistics } = require("v8");

log(getHeapStatistics());
