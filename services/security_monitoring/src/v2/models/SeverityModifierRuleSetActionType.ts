import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of a severity modifier rule action that sets a fixed severity.
 */
export type SeverityModifierRuleSetActionType = typeof SET | UnparsedObject;
export const SET = "set";
