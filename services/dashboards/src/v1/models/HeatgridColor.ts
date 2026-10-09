import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A color string, or two color strings for the light and dark themes, in that order.
 */
export type HeatgridColor = string | [string, string] | UnparsedObject;
