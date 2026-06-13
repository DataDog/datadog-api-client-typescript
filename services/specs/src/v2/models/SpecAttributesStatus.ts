import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The publication status of the spec.
 */
export type SpecAttributesStatus =
  | typeof PUBLISHED
  | typeof DRAFT
  | typeof DEPRECATED
  | UnparsedObject;
export const PUBLISHED = "published";
export const DRAFT = "draft";
export const DEPRECATED = "deprecated";
