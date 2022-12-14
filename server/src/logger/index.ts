import buildDevLogger from "./devLogger";
import buildProdLogger from "./prodLogger";

let logger = null;
const env = process.env.NODE_ENV || "development";
if (env === "development") {
  logger = buildDevLogger();
} else {
  logger = buildProdLogger();
}

export default logger;