import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the AI-generated Cloud Cost Management tag description resource.
 */
export type GeneratedCostTagDescriptionType =
  | typeof COST_GENERATED_TAG_DESCRIPTION
  | UnparsedObject;
export const COST_GENERATED_TAG_DESCRIPTION = "cost_generated_tag_description";
