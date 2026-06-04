import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resulting lifecycle status of the organization after the disable action.
 */
export type CustomerOrgDisableStatus =
  | typeof DISABLED
  | typeof PENDING_DISABLE
  | UnparsedObject;
export const DISABLED = "disabled";
export const PENDING_DISABLE = "pending_disable";
