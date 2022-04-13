import log from "loglevel";

const logger = log.noConflict();
logger.setLevel((process !== undefined && process.env.DEBUG) ? logger.levels.DEBUG : logger.levels.INFO);

export { logger };
