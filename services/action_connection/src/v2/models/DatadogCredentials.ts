import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatadogAPIKey } from "./DatadogAPIKey";

/**
 * The definition of the `DatadogCredentials` object.
 */
export type DatadogCredentials = DatadogAPIKey | UnparsedObject;
