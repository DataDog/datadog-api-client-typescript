import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Incident rule response resource type.
 */
export type IncidentRuleResponseType = typeof INCIDENTS_RULES | UnparsedObject;
export const INCIDENTS_RULES = "incidents_rules";
