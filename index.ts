export * as v1 from "./packages/datadog-api-client-v1";
export * as v2 from "./packages/datadog-api-client-v2";

import log from "loglevel";

const logger_ = log.getLogger("packages")
logger_.setLevel(process.env.DEBUG ? logger_.levels.DEBUG : logger_.levels.INFO);

export const logger = logger_;
