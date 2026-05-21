import { UnparsedObject } from "@datadog/datadog-api-client";

import { ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader } from "./ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader";
import { ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation } from "./ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation";

/**
 * Specifies where the worker extracts the token from in the incoming HTTP request.
 * This can be either a built-in location (`path` or `address`) or an HTTP header object.
 */
export type ObservabilityPipelineHttpServerSourceValidTokenPathToToken =
  | ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation
  | ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader
  | UnparsedObject;
