import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a dataset dependents entry.
 */
export type SecurityMonitoringDatasetDependentsType =
  | typeof DATASET_DEPENDENTS
  | UnparsedObject;
export const DATASET_DEPENDENTS = "datasetDependents";
