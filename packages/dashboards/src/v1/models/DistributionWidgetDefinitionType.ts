import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the distribution widget.
 */
export type DistributionWidgetDefinitionType =
  | typeof DISTRIBUTION
  | UnparsedObject;
export const DISTRIBUTION = "distribution";
