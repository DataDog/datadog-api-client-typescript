import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { DatadogAPIKeyUpdate } from "./DatadogAPIKeyUpdate";

/**
 * The definition of the `DatadogCredentialsUpdate` object.
 */
export type DatadogCredentialsUpdate = DatadogAPIKeyUpdate | UnparsedObject;
