import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the Cloud Cost Management tag description resource.
 */
export type CostTagDescriptionType =
  | typeof COST_TAG_DESCRIPTION
  | UnparsedObject;
export const COST_TAG_DESCRIPTION = "cost_tag_description";
