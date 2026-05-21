/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader } from "./ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader";
import { ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation } from "./ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies where the worker extracts the token from in the incoming HTTP request.
 * This can be either a built-in location (`path` or `address`) or an HTTP header object.
 */

export type ObservabilityPipelineHttpServerSourceValidTokenPathToToken =
  | ObservabilityPipelineHttpServerSourceValidTokenPathToTokenLocation
  | ObservabilityPipelineHttpServerSourceValidTokenPathToTokenHeader
  | UnparsedObject;
