import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Snapshots resource type.
 */
export type SnapshotUpdateRequestDataType = typeof SNAPSHOTS | UnparsedObject;
export const SNAPSHOTS = "snapshots";
