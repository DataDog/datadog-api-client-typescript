import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Origin of the description. `human` indicates the description was written by a user, `ai_generated` was produced by AI, and `datadog` is a default supplied by Datadog.
 */
export type CostTagDescriptionSource =
  | typeof HUMAN
  | typeof AI_GENERATED
  | typeof DATADOG
  | UnparsedObject;
export const HUMAN = "human";
export const AI_GENERATED = "ai_generated";
export const DATADOG = "datadog";
