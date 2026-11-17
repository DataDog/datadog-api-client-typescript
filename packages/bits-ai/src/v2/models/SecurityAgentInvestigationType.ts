import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the investigation resource.
 */
export type SecurityAgentInvestigationType =
  | typeof INVESTIGATIONS
  | UnparsedObject;
export const INVESTIGATIONS = "investigations";
