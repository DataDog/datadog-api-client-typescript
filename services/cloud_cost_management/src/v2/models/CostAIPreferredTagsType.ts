import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Preferred tags resource type.
 */
export type CostAIPreferredTagsType = typeof PREFERRED_TAGS | UnparsedObject;
export const PREFERRED_TAGS = "preferred_tags";
