import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API type for timestamp overrides.
 */
export type IncidentsTimestampOverridesType =
  | typeof INCIDENTS_TIMESTAMP_OVERRIDES
  | UnparsedObject;
export const INCIDENTS_TIMESTAMP_OVERRIDES = "incidents_timestamp_overrides";
