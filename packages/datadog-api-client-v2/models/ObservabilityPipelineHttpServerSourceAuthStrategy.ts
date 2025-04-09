/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * HTTP authentication method.
 */

export type ObservabilityPipelineHttpServerSourceAuthStrategy =
  | typeof NONE
  | typeof PLAIN
  | UnparsedObject;
export const NONE = "none";
export const PLAIN = "plain";
