import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type.
 */
export type RumRecoveryCountResponseDataType =
  | typeof RUM_RECOVERY_COUNT
  | UnparsedObject;
export const RUM_RECOVERY_COUNT = "rum_recovery_count";
