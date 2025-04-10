import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `quota`.
 */
export type ObservabilityPipelineQuotaProcessorType =
  | typeof QUOTA
  | UnparsedObject;
export const QUOTA = "quota";
