import app from "./app";
import config from "@config/config";

const { server } = config;

app.listen(server.port, () => {
  return console.log(`Application is listening on port ${server.port}.`);
});