import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { LeakedKey } from "./LeakedKey";
import { User } from "./User";

/**
 * An object related to an API key.
 */
export type APIKeyResponseIncludedItem = User | LeakedKey | UnparsedObject;
