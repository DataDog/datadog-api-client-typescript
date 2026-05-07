import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Active tag key resource type.
 */
export type CostTagPipelineActiveKeyType =
  | typeof ACTIVE_TAG_KEY
  | UnparsedObject;
export const ACTIVE_TAG_KEY = "active_tag_key";
