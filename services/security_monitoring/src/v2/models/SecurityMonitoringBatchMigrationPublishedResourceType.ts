import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource for a published batch migration resource.
 */
export type SecurityMonitoringBatchMigrationPublishedResourceType =
  | typeof BATCH_MIGRATION_PUBLISHED_RESOURCE
  | UnparsedObject;
export const BATCH_MIGRATION_PUBLISHED_RESOURCE =
  "batchMigrationPublishedResource";
