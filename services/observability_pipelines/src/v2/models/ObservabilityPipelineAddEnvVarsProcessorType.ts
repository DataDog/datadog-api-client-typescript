import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The processor type. The value should always be `add_env_vars`.
 */
export type ObservabilityPipelineAddEnvVarsProcessorType =
  | typeof ADD_ENV_VARS
  | UnparsedObject;
export const ADD_ENV_VARS = "add_env_vars";
