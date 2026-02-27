import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the segment template resource.
 */
export type RumSegmentTemplateResourceType =
  | typeof TEMPLATE_METADATA
  | UnparsedObject;
export const TEMPLATE_METADATA = "template_metadata";
