import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Impact field resource type.
 */
export type IncidentImpactFieldType = typeof IMPACT_FIELDS | UnparsedObject;
export const IMPACT_FIELDS = "impact_fields";
