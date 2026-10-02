import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Current stage in the experiment lifecycle.
 */
export type ExperimentsExperimentV2DTODataAttributesStatus =
  | typeof DRAFT
  | typeof SCHEDULED
  | typeof IN_PROGRESS
  | typeof READY_FOR_DECISION
  | typeof DECISION_MADE
  | typeof CANCELLED
  | typeof UNKNOWN
  | UnparsedObject;
export const DRAFT = "DRAFT";
export const SCHEDULED = "SCHEDULED";
export const IN_PROGRESS = "IN_PROGRESS";
export const READY_FOR_DECISION = "READY_FOR_DECISION";
export const DECISION_MADE = "DECISION_MADE";
export const CANCELLED = "CANCELLED";
export const UNKNOWN = "UNKNOWN";
