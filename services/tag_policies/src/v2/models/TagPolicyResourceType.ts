import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * JSON:API resource type for a tag policy.
 */
export type TagPolicyResourceType = typeof TAG_POLICY | UnparsedObject;
export const TAG_POLICY = "tag_policy";
