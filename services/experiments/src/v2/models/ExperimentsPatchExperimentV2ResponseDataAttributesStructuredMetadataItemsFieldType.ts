import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of value stored in the structured metadata field.
 */
export type ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType =
  typeof FREETEXT | typeof ENUM | UnparsedObject;
export const FREETEXT = "FREETEXT";
export const ENUM = "ENUM";
