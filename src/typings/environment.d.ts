import ts from "typescript";

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      PORT?: string;
      NODE_CONFIG_DIR: string;
    }
  }
}
