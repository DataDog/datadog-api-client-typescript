import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the cost anomalies collection resource. Must be `anomalies`.
 */
export type CostAnomaliesResponseDataType = typeof ANOMALIES | UnparsedObject;
export const ANOMALIES = "anomalies";
