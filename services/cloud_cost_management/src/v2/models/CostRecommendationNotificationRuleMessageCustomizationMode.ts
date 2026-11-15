import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the message is customized.
 */
export type CostRecommendationNotificationRuleMessageCustomizationMode =
  | typeof STRUCTURED
  | UnparsedObject;
export const STRUCTURED = "structured";
