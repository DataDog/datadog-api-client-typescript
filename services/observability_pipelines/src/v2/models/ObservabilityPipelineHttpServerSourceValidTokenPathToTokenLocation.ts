import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Built-in token location on the incoming HTTP request.
 */
export type ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation =
  typeof PATH | typeof ADDRESS | UnparsedObject;
export const PATH = "path";
export const ADDRESS = "address";
