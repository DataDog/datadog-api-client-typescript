import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the pruned trace resource. The value is always `pruned_trace`.
 */
export type PrunedTraceType = typeof PRUNED_TRACE | UnparsedObject;
export const PRUNED_TRACE = "pruned_trace";
