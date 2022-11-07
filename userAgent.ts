import { version } from "./version";

export let userAgent: string;
if (typeof process !== 'undefined' && process.release.name === 'node') {
    const os = require("os");
    userAgent = `datadog-api-client-typescriptaaa/${version} (node ${process.versions.node}; os ${os.type()}; arch ${os.arch()})`
} else if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    // we don't set user-agent headers in browsers
} else {
    userAgent = `datadog-api-client-typescript/${version} (runtime unknown)`
}
