import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of a severity modifier rule action that shifts the severity by one rank.
 */
export type SeverityModifierRuleShiftActionType = typeof SHIFT | UnparsedObject;
export const SHIFT = "shift";
