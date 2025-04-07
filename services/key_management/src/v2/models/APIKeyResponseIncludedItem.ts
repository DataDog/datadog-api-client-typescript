import { UnparsedObject } from "@datadog/datadog-api-client";

import { LeakedKey } from "./LeakedKey";
import { User } from "./User";

/**
 * An object related to an API key.
 */
export type APIKeyResponseIncludedItem = User | LeakedKey | UnparsedObject;
