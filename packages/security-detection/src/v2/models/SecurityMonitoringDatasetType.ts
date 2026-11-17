import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of resource for a dataset response.
 */
export type SecurityMonitoringDatasetType = typeof DATASET | UnparsedObject;
export const DATASET = "dataset";
