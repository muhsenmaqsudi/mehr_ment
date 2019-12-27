process.env["NODE_CONFIG_DIR"] = "./src/config/env";
import dotenv from "dotenv";
import config from "config";
import { ConfigKeys, ServerConfig, DatabaseConfig } from "./env/ConfigKeys";

dotenv.config();

const serverConfig: ServerConfig = config.get(ConfigKeys.SERVER);
const databaseConfig: DatabaseConfig = config.get(ConfigKeys.DATABASE);

const PORT = serverConfig.port || process.env["PORT"];
const DB_URL = databaseConfig?.URI || process.env["MONGODB_URI"];

export { PORT, DB_URL };
