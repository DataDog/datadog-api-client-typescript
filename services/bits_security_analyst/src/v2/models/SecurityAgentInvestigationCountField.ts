import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Field to count completed investigations by.
 */
export type SecurityAgentInvestigationCountField =
  | typeof VERDICT
  | typeof RULE_TYPE
  | typeof SIGNAL_SOURCE
  | typeof ENTITY
  | UnparsedObject;
export const VERDICT = "verdict";
export const RULE_TYPE = "rule_type";
export const SIGNAL_SOURCE = "signal_source";
export const ENTITY = "entity";
