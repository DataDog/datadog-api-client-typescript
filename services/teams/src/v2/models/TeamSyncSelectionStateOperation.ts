import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The operation to perform on the selected hierarchy.
 * When set to `include`, synchronization covers the
 * referenced teams or organizations.
 */
export type TeamSyncSelectionStateOperation = typeof INCLUDE | UnparsedObject;
export const INCLUDE = "include";
