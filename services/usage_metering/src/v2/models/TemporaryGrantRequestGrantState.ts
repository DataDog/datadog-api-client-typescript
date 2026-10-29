import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current state of the grant associated with an approved request. Replaced means a newer grant superseded this grant. The newer grant might no longer be active. This field is absent for requests that weren't approved.
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
