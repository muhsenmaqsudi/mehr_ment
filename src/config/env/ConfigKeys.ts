export enum ConfigKeys {
  SERVER = "server",
  DATABASE = "database"
}

export interface ServerConfig {
  port: string;
}

export interface DatabaseConfig {
  URI?: string;
}
