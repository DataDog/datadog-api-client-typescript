import { UnparsedObject } from "@datadog/datadog-api-client";

import { GeminiAPIKey } from "./GeminiAPIKey";

/**
 * The definition of the `GeminiCredentials` object.
 */
export type GeminiCredentials = GeminiAPIKey | UnparsedObject;
