import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of scope the retention quota configuration applies to.
 */
export type RumRetentionQuotaScopeType = typeof APPLICATION | UnparsedObject;
export const APPLICATION = "application";
