import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The metric actively queried configuration resource type.
 */
export type MetricActiveConfigurationType =
  | typeof ACTIVELY_QUERIED_CONFIGURATIONS
  | UnparsedObject;
export const ACTIVELY_QUERIED_CONFIGURATIONS =
  "actively_queried_configurations";
