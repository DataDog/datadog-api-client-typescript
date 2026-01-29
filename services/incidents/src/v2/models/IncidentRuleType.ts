import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident rule resource type.
 */
export type IncidentRuleType = typeof INCIDENT_RULE | UnparsedObject;
export const INCIDENT_RULE = "incident_rule";
