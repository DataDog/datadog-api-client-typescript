import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `tag_policy`.
 */
export type TagPolicyType = typeof TAG_POLICY | UnparsedObject;
export const TAG_POLICY = "tag_policy";
