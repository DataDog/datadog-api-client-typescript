import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of retention filter. The value should always be spans-sampling-processor.
 */
export type RetentionFilterType =
  | typeof SPANS_SAMPLING_PROCESSOR
  | UnparsedObject;
export const SPANS_SAMPLING_PROCESSOR = "spans-sampling-processor";
