import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAIAPIKeyUpdate } from "./OpenAIAPIKeyUpdate";

/**
 * The definition of the `OpenAICredentialsUpdate` object.
 */
export type OpenAICredentialsUpdate = OpenAIAPIKeyUpdate | UnparsedObject;
