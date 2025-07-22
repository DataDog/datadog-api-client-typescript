import { UnparsedObject } from "@datadog/datadog-api-client";

import { VirusTotalAPIKey } from "./VirusTotalAPIKey";

/**
 * The definition of the `VirusTotalCredentials` object.
 */
export type VirusTotalCredentials = VirusTotalAPIKey | UnparsedObject;
