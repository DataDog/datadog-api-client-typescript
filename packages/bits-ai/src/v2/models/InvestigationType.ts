import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The resource type for investigations.
 */
export type InvestigationType = typeof INVESTIGATION | UnparsedObject;
export const INVESTIGATION = "investigation";
