import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for entity content pack details.
 */
export type SecurityMonitoringContentPackEntityDetailsType =
  | typeof ENTITY
  | UnparsedObject;
export const ENTITY = "entity";
