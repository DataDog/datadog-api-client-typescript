import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current triage state of the indicator.
 */
export type IoCTriageState =
  | typeof NOT_REVIEWED
  | typeof REVIEWED
  | UnparsedObject;
export const NOT_REVIEWED = "not_reviewed";
export const REVIEWED = "reviewed";
