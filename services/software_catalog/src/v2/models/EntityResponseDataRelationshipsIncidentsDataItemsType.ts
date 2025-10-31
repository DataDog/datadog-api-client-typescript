import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident resource type.
 */
export type EntityResponseDataRelationshipsIncidentsDataItemsType =
  | typeof INCIDENT
  | UnparsedObject;
export const INCIDENT = "incident";
