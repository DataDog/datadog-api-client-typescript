import { UnparsedObject } from "@datadog/datadog-api-client";

import { AnthropicAPIKeyUpdate } from "./AnthropicAPIKeyUpdate";

/**
 * The definition of the `AnthropicCredentialsUpdate` object.
 */
export type AnthropicCredentialsUpdate = AnthropicAPIKeyUpdate | UnparsedObject;
