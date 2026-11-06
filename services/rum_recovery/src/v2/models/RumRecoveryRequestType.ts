import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type.
 */
export type RumRecoveryRequestType =
  | typeof RUM_RECOVERY_REQUEST
  | UnparsedObject;
export const RUM_RECOVERY_REQUEST = "rum_recovery_request";
