import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The user's status.
 */
export type UserAttributesStatus =
  | typeof ACTIVE
  | typeof DEACTIVATED
  | typeof PENDING
  | UnparsedObject;
export const ACTIVE = "active";
export const DEACTIVATED = "deactivated";
export const PENDING = "pending";
