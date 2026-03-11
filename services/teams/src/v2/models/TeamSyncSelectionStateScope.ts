import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The scope of the selection. When set to `subtree`,
 * synchronization includes the referenced team or
 * organization and everything nested under it.
 */
export type TeamSyncSelectionStateScope = typeof SUBTREE | UnparsedObject;
export const SUBTREE = "subtree";
