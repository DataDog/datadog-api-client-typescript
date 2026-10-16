import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a request on a set of batch migration resources.
 */
export type SecurityMonitoringBatchMigrationResourcesType =
  | typeof BATCH_MIGRATION_RESOURCES
  | UnparsedObject;
export const BATCH_MIGRATION_RESOURCES = "batchMigrationResources";
