import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type.
 */
export type RUMRecoveryBatchListDataType =
  | typeof RUM_BATCH_RECOVERY_REQUEST
  | UnparsedObject;
export const RUM_BATCH_RECOVERY_REQUEST = "rum_batch_recovery_request";
