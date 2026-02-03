import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Snapshots resource type.
 */
export type SnapshotUpdateRequestDataType = typeof SNAPSHOTS | UnparsedObject;
export const SNAPSHOTS = "snapshots";
