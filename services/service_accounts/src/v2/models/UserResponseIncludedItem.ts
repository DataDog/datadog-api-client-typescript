import { UnparsedObject } from "@datadog/datadog-api-client";

import { Organization } from "./Organization";
import { Permission } from "./Permission";
import { Role } from "./Role";

/**
 * An object related to a user.
 */
export type UserResponseIncludedItem =
  | Organization
  | Permission
  | Role
  | UnparsedObject;
