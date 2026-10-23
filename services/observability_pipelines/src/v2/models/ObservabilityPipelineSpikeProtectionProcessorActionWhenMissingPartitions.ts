import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How to handle logs that are missing one of the `partition_fields`. Options:
 * - `ignore`: Forward the event without applying spike protection.
 * - `default_bucket`: Assign the event to a default partition.
 */
export type ObservabilityPipelineSpikeProtectionProcessorActionWhenMissingPartitions =
  typeof IGNORE | typeof DEFAULT_BUCKET | UnparsedObject;
export const IGNORE = "ignore";
export const DEFAULT_BUCKET = "default_bucket";
