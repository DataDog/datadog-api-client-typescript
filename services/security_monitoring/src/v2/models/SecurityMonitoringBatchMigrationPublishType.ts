import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a batch migration publish request.
 */
export type SecurityMonitoringBatchMigrationPublishType =
  | typeof BATCH_MIGRATION_PUBLISH
  | UnparsedObject;
export const BATCH_MIGRATION_PUBLISH = "batchMigrationPublish";
