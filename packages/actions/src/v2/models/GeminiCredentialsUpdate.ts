import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { GeminiAPIKeyUpdate } from "./GeminiAPIKeyUpdate";

/**
 * The definition of the `GeminiCredentialsUpdate` object.
 */
export type GeminiCredentialsUpdate = GeminiAPIKeyUpdate | UnparsedObject;
