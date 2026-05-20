import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a tag.
 */
export type TagDataType = typeof TAG | UnparsedObject;
export const TAG = "tag";
