import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current state of the grant associated with an approved request. Replaced means a successor superseded this grant; the successor need not still be active. Absent for requests that were not approved.
 */
export type TemporaryGrantRequestGrantState =
  | typeof ACTIVE
  | typeof EXPIRED
  | typeof REVOKED
  | typeof REPLACED
  | UnparsedObject;
export const ACTIVE = "active";
export const EXPIRED = "expired";
export const REVOKED = "revoked";
export const REPLACED = "replaced";
