import ts from "typescript";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "test" | "production";
      PORT?: string;
      NODE_CONFIG_DIR: string;
      MONGODB_URI: string;
    }
  }
}
