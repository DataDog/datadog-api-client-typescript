import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The outcome of publishing a batch migration resource.
 */
export type SecurityMonitoringBatchMigrationPublishedResourceStatus =
  | typeof PUBLISHED
  | typeof FAILED
  | UnparsedObject;
export const PUBLISHED = "published";
export const FAILED = "failed";
