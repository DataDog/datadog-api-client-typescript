import { version } from "./version";

export let userAgent: string;
if (typeof process !== 'undefined' && process.release && process.release.name === 'node') {
    userAgent = `datadog-api-client-typescript/${version} (node ${process.versions.node}; os ${process.platform}; arch ${process.arch})`
} else if (typeof window !== "undefined" && typeof window.document !== "undefined") {
    // we don't set user-agent headers in browsers
} else {
    userAgent = `datadog-api-client-typescript/${version} (runtime unknown)`
}
