import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a dataset create request.
 */
export type SecurityMonitoringDatasetCreateType =
  | typeof DATASET_CREATE
  | UnparsedObject;
export const DATASET_CREATE = "datasetCreate";
