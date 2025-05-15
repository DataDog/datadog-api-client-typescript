import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `ocsf_mapper`.
 */
export type ObservabilityPipelineOcsfMapperProcessorType =
  | typeof OCSF_MAPPER
  | UnparsedObject;
export const OCSF_MAPPER = "ocsf_mapper";
