import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of resource for a batch migration.
 */
export type SecurityMonitoringBatchMigrationType =
  | typeof BATCH_MIGRATION
  | UnparsedObject;
export const BATCH_MIGRATION = "batchMigration";
