import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Query-based batch recovery.
 */
export type RumRecoveryBatchRequestType = typeof BATCH | UnparsedObject;
export const BATCH = "batch";
