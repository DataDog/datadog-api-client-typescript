import * as os from "os";

export const version = "0.1.0"
export const userAgent = `datadog-api-client-typescript/${version} (node ${process.versions.node}; os ${os.type()}; arch ${os.arch()})`
