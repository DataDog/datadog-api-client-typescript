import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a dataset update request.
 */
export type SecurityMonitoringDatasetUpdateType =
  | typeof DATASET_UPDATE
  | UnparsedObject;
export const DATASET_UPDATE = "datasetUpdate";
