import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident timestamp override resource type.
 */
export type IncidentTimestampOverrideType =
  | typeof INCIDENTS_TIMESTAMP_OVERRIDES
  | UnparsedObject;
export const INCIDENTS_TIMESTAMP_OVERRIDES = "incidents_timestamp_overrides";
