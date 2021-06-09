import * as os from "os";

export const version = "1.0.0-beta.4-dev"
export const userAgent = `datadog-api-client-typescript/${version} (node ${process.versions.node}; os ${os.type()}; arch ${os.arch()})`
