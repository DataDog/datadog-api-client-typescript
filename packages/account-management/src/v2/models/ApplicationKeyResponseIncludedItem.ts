import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { LeakedKey } from "./LeakedKey";
import { Role } from "./Role";
import { User } from "./User";

/**
 * An object related to an application key.
 */
export type ApplicationKeyResponseIncludedItem =
  | User
  | Role
  | LeakedKey
  | UnparsedObject;
