import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * A notification end type.
 */
export type NotifyEndType = typeof CANCELED | typeof EXPIRED | UnparsedObject;
export const CANCELED = "canceled";
export const EXPIRED = "expired";
