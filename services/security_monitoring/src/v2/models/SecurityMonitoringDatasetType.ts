import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a dataset response.
 */
export type SecurityMonitoringDatasetType = typeof DATASET | UnparsedObject;
export const DATASET = "dataset";
