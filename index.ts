export * as v1 from "./packages/datadog-api-client-v1";
export * as v2 from "./packages/datadog-api-client-v2";

import log from "loglevel";

const logger = log.noConflict();
logger.setLevel((process !== undefined && process.env.DEBUG) ? logger.levels.DEBUG : logger.levels.INFO);

export { logger };
