import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The lifecycle stage at which the app prompts users to fill out this field. Cannot be set on required fields.
 */
export type IncidentUserDefinedFieldCollected =
  | typeof ACTIVE
  | typeof STABLE
  | typeof RESOLVED
  | typeof COMPLETED
  | UnparsedObject;
export const ACTIVE = "active";
export const STABLE = "stable";
export const RESOLVED = "resolved";
export const COMPLETED = "completed";
