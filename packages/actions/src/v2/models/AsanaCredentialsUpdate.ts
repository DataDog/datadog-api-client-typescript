import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AsanaAccessTokenUpdate } from "./AsanaAccessTokenUpdate";

/**
 * The definition of the `AsanaCredentialsUpdate` object.
 */
export type AsanaCredentialsUpdate = AsanaAccessTokenUpdate | UnparsedObject;
