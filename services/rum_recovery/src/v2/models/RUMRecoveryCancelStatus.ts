import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Requested cancellation state.
 */
export type RUMRecoveryCancelStatus = typeof CANCELLED | UnparsedObject;
export const CANCELLED = "cancelled";
