import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The origin of a batch migration. Always `batch_migration` for batch migrations
 * created through this API.
 */
export type SecurityMonitoringBatchMigrationInputSource =
  | typeof BATCH_MIGRATION
  | typeof THREAT_HUNTING
  | typeof USER
  | UnparsedObject;
export const BATCH_MIGRATION = "batch_migration";
export const THREAT_HUNTING = "threat_hunting";
export const USER = "user";
