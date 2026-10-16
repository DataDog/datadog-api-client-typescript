import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a batch migration resource.
 */
export type SecurityMonitoringBatchMigrationResourceType =
  | typeof BATCH_MIGRATION_RESOURCE
  | UnparsedObject;
export const BATCH_MIGRATION_RESOURCE = "batchMigrationResource";
