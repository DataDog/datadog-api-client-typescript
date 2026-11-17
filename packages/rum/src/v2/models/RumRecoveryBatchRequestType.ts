import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Query-based batch recovery.
 */
export type RumRecoveryBatchRequestType = typeof BATCH | UnparsedObject;
export const BATCH = "batch";
