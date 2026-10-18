import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The status of a batch migration resource. `completed` resources have a translation in
 * `output` that is ready to be published. `duplicate` is reserved for future duplicate rule
 * detection.
 */
export type SecurityMonitoringBatchMigrationResourceStatus =
  | typeof PENDING
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof CANCELED
  | typeof FAILED
  | typeof PUBLISHING
  | typeof PUBLISHED
  | typeof DUPLICATE
  | UnparsedObject;
export const PENDING = "pending";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const CANCELED = "canceled";
export const FAILED = "failed";
export const PUBLISHING = "publishing";
export const PUBLISHED = "published";
export const DUPLICATE = "duplicate";
