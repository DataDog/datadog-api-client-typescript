import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the source.
 */
export type DegradationDataAttributesSourceType =
  | typeof INCIDENT
  | UnparsedObject;
export const INCIDENT = "incident";
