import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { VirusTotalAPIKeyUpdate } from "./VirusTotalAPIKeyUpdate";

/**
 * The definition of the `VirusTotalCredentialsUpdate` object.
 */
export type VirusTotalCredentialsUpdate =
  | VirusTotalAPIKeyUpdate
  | UnparsedObject;
