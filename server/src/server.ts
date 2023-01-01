import app from "./app";
import config from "@config/config";
import logger from "./logger";

const { server } = config;

app.listen(server.port, () => {
  return logger.info(`Application is listening on port ${server.port}.`);
});