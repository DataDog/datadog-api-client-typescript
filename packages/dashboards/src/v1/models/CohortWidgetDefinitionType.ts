import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the Cohort widget.
 */
export type CohortWidgetDefinitionType = typeof COHORT | UnparsedObject;
export const COHORT = "cohort";
