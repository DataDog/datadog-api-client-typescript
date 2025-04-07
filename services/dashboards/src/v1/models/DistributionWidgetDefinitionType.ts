import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the distribution widget.
 */
export type DistributionWidgetDefinitionType =
  | typeof DISTRIBUTION
  | UnparsedObject;
export const DISTRIBUTION = "distribution";
