import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the plan was produced.
 */
export type RemediationPlanSource =
  | typeof DETERMINISTIC
  | typeof AI
  | UnparsedObject;
export const DETERMINISTIC = "deterministic";
export const AI = "ai";
