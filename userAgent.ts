import * as os from "os";
import { version } from "./version";

export const userAgent = `datadog-api-client-typescript/${version} (node ${process.versions.node}; os ${os.type()}; arch ${os.arch()})`
