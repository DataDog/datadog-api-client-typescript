import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership history resource. The value should always be `ownership_history`.
 */
export type OwnershipHistoryType = typeof OWNERSHIP_HISTORY | UnparsedObject;
export const OWNERSHIP_HISTORY = "ownership_history";
