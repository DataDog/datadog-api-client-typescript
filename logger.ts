import log from "loglevel";

const logger = log.noConflict();
logger.setLevel((typeof process !== "undefined" && process.release.name === 'node' && process.env.DEBUG) ? logger.levels.DEBUG : logger.levels.INFO);

export { logger };
