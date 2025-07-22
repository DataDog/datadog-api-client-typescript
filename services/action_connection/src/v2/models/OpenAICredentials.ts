import { UnparsedObject } from "@datadog/datadog-api-client";

import { OpenAIAPIKey } from "./OpenAIAPIKey";

/**
 * The definition of the `OpenAICredentials` object.
 */
export type OpenAICredentials = OpenAIAPIKey | UnparsedObject;
