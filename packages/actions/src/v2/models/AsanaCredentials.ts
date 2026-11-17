import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AsanaAccessToken } from "./AsanaAccessToken";

/**
 * The definition of the `AsanaCredentials` object.
 */
export type AsanaCredentials = AsanaAccessToken | UnparsedObject;
