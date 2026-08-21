import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The retention quota mode. `custom` enforces a fixed session limit.
 * `custom` is the only supported mode.
 */
export type RumRetentionQuotaMode = typeof CUSTOM | UnparsedObject;
export const CUSTOM = "custom";
