import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How Datadog serves a MANAGED holdout. GLOBAL holdouts apply to every eligible experiment of a subject type. SELECTIVE holdouts apply only to the experiments attached to them. Null for EXTERNAL holdouts.
 */
export type ExperimentsExperimentHoldoutV2DTODataAttributesHoldoutType =
  | typeof GLOBAL
  | typeof SELECTIVE
  | typeof UNKNOWN
  | UnparsedObject;
export const GLOBAL = "GLOBAL";
export const SELECTIVE = "SELECTIVE";
export const UNKNOWN = "UNKNOWN";
