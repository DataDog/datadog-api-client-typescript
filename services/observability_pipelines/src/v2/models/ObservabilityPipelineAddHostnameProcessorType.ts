import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `add_hostname`.
 */
export type ObservabilityPipelineAddHostnameProcessorType =
  | typeof ADD_HOSTNAME
  | UnparsedObject;
export const ADD_HOSTNAME = "add_hostname";
