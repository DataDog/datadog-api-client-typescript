import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The tags resource type.
 */
export type AppTagsType = typeof TAGS | UnparsedObject;
export const TAGS = "tags";
