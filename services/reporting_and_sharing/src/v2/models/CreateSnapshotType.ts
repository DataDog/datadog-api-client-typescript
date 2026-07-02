import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type identifier for snapshot creation resources.
 */
export type CreateSnapshotType = typeof CREATE_SNAPSHOT | UnparsedObject;
export const CREATE_SNAPSHOT = "create_snapshot";
