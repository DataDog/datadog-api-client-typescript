import { UnparsedObject } from "@datadog/datadog-api-client";

import { GeminiAPIKeyUpdate } from "./GeminiAPIKeyUpdate";

/**
 * The definition of the `GeminiCredentialsUpdate` object.
 */
export type GeminiCredentialsUpdate = GeminiAPIKeyUpdate | UnparsedObject;
