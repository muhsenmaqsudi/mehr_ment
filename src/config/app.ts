process.env["NODE_CONFIG_DIR"] = "./src/config/env";
import dotenv from "dotenv";
import config from "config";
import { ConfigKeys, ServerConfig } from "./env/ConfigKeys";

dotenv.config();

const serverConfig: ServerConfig = config.get(ConfigKeys.SERVER);

const PORT = serverConfig.port || process.env["PORT"];

export { PORT };
