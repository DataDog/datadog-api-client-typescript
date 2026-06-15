import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A related resource to include alongside a tag policy in the response. Currently the only supported value is `score`.
 */
export type TagPolicyInclude = typeof SCORE | UnparsedObject;
export const SCORE = "score";
