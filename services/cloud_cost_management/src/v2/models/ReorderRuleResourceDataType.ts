import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Arbitrary rule resource type.
 */
export type ReorderRuleResourceDataType =
  | typeof ARBITRARY_RULE
  | UnparsedObject;
export const ARBITRARY_RULE = "arbitrary_rule";
