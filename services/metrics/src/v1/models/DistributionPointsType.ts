import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the distribution point.
 */
export type DistributionPointsType = typeof DISTRIBUTION | UnparsedObject;
export const DISTRIBUTION = "distribution";
