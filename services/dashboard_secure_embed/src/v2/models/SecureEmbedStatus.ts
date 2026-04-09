import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of the secure embed share. Active means the shared dashboard is available. Paused means it is not.
 */
export type SecureEmbedStatus = typeof ACTIVE | typeof PAUSED | UnparsedObject;
export const ACTIVE = "active";
export const PAUSED = "paused";
