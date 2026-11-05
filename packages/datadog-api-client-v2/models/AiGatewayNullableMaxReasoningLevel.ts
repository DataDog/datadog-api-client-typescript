/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Maximum reasoning level permitted by a model group.
 */

export type AiGatewayNullableMaxReasoningLevel =
  | typeof NONE
  | typeof MINIMAL
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof XHIGH
  | typeof MAX
  | UnparsedObject;
export const NONE = "none";
export const MINIMAL = "minimal";
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const XHIGH = "xhigh";
export const MAX = "max";
