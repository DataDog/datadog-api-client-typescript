import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Limit resource type.
 */
export type GovernanceLimitResourceType = typeof LIMIT | UnparsedObject;
export const LIMIT = "limit";
