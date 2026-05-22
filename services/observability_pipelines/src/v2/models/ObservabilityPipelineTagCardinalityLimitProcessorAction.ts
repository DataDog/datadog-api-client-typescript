import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The action to take when the cardinality limit is exceeded.
 */
export type ObservabilityPipelineTagCardinalityLimitProcessorAction =
  | typeof DROP_TAG
  | typeof DROP_EVENT
  | UnparsedObject;
export const DROP_TAG = "drop_tag";
export const DROP_EVENT = "drop_event";
