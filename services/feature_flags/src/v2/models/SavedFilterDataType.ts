import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The saved filter resource type.
 */
export type SavedFilterDataType = typeof SAVED_FILTERS | UnparsedObject;
export const SAVED_FILTERS = "saved-filters";
