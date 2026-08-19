import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A related resource to include alongside a tag rule in the response. Currently the only supported value is `score`.
 */
export type TagRuleInclude = typeof SCORE | UnparsedObject;
export const SCORE = "score";
