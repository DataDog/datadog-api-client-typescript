import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The owner type for an ownership inference.
 */
export type OwnershipOwnerType =
  | typeof USER
  | typeof TEAM
  | typeof SERVICE
  | typeof UNKNOWN
  | UnparsedObject;
export const USER = "user";
export const TEAM = "team";
export const SERVICE = "service";
export const UNKNOWN = "unknown";
