import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of retention filter.
 */
export type RetentionFilterAllType =
  | typeof SPANS_SAMPLING_PROCESSOR
  | typeof SPANS_ERRORS_SAMPLING_PROCESSOR
  | typeof SPANS_APPSEC_SAMPLING_PROCESSOR
  | UnparsedObject;
export const SPANS_SAMPLING_PROCESSOR = "spans-sampling-processor";
export const SPANS_ERRORS_SAMPLING_PROCESSOR = "spans-errors-sampling-processor";
export const SPANS_APPSEC_SAMPLING_PROCESSOR = "spans-appsec-sampling-processor";
