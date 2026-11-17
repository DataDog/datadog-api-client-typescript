import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Requested cancellation state.
 */
export type RumRecoveryCancelStatus = typeof CANCELLED | UnparsedObject;
export const CANCELLED = "cancelled";
