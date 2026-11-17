import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * SLO resource type.
 */
export type MetricSLOType = typeof SLOS | UnparsedObject;
export const SLOS = "slos";
