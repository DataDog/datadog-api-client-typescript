import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Incident rule resource type.
 */
export type IncidentRuleType = typeof INCIDENT_RULES | UnparsedObject;
export const INCIDENT_RULES = "incident_rules";
