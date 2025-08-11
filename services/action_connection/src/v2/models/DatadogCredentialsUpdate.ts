import { UnparsedObject } from "@datadog/datadog-api-client";

import { DatadogAPIKeyUpdate } from "./DatadogAPIKeyUpdate";

/**
 * The definition of the `DatadogCredentialsUpdate` object.
 */
export type DatadogCredentialsUpdate = DatadogAPIKeyUpdate | UnparsedObject;
