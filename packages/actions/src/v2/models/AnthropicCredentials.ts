import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AnthropicAPIKey } from "./AnthropicAPIKey";

/**
 * The definition of the `AnthropicCredentials` object.
 */
export type AnthropicCredentials = AnthropicAPIKey | UnparsedObject;
