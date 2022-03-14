import path from "path";
import dotenv from "dotenv";

// Parsing the env file.
dotenv.config({ path: path.resolve(__dirname, "../config/config.env") });

// Interface to load env variables
// Note these variables can possibly be undefined
// as someone could skip these varibales or not setup a .env file at all

interface ENV {
  NODE_ENV: string | undefined;
  KAFKA_KEY: string | undefined;
  KAFKA_SECRET: string | undefined;
  KAFKA_BOOTSTRAP_SERVER: string | undefined;
  TOPIC: string | undefined;
}

export interface Config {
  NODE_ENV: string;
  KAFKA_KEY: string;
  KAFKA_SECRET: string;
  KAFKA_BOOTSTRAP_SERVER: string;
  TOPIC: string;
}

// Loading process.env as ENV interface

const getConfig = (): ENV => {
  return { ...process.env };
};

const getSanitzedConfig = (config: ENV): Config => {
  for (const [key, value] of Object.entries(config)) {
    if (value === undefined) {
      throw new Error(`Missing key ${key} in config.env`);
    }
  }
  return config as Config;
};

const config = getConfig();

const sanitizedConfig = getSanitzedConfig(config);

export default sanitizedConfig;
