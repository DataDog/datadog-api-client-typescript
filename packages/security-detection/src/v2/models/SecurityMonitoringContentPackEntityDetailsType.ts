import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type for entity content pack details.
 */
export type SecurityMonitoringContentPackEntityDetailsType =
  | typeof ENTITY
  | UnparsedObject;
export const ENTITY = "entity";
