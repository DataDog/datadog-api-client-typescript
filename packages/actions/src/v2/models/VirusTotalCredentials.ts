import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { VirusTotalAPIKey } from "./VirusTotalAPIKey";

/**
 * The definition of the `VirusTotalCredentials` object.
 */
export type VirusTotalCredentials = VirusTotalAPIKey | UnparsedObject;
