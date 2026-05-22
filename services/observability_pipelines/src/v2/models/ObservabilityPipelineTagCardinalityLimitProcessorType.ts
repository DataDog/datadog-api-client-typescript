import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value must be `tag_cardinality_limit`.
 */
export type ObservabilityPipelineTagCardinalityLimitProcessorType =
  | typeof TAG_CARDINALITY_LIMIT
  | UnparsedObject;
export const TAG_CARDINALITY_LIMIT = "tag_cardinality_limit";
