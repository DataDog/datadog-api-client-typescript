import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a dataset version history response.
 */
export type SecurityMonitoringDatasetVersionHistoryType =
  | typeof DATASET_VERSION_HISTORY
  | UnparsedObject;
export const DATASET_VERSION_HISTORY = "dataset_version_history";
