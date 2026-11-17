import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of general investigation trigger.
 */
export type GeneralInvestigationTriggerType =
  | typeof GENERAL_INVESTIGATION
  | UnparsedObject;
export const GENERAL_INVESTIGATION = "general_investigation";
