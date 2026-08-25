import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The rule type allowed when creating a tag rule. Only `surfacing` is accepted at
 * creation time.
 */
export type TagRuleCreateType = typeof SURFACING | UnparsedObject;
export const SURFACING = "surfacing";
