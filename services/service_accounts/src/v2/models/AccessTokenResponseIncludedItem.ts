import { UnparsedObject } from "@datadog/datadog-api-client";

import { LeakedKey } from "./LeakedKey";

/**
 * An object related to an access token.
 */
export type AccessTokenResponseIncludedItem = LeakedKey | UnparsedObject;
