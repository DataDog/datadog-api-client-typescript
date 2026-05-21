/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The effort level for Anthropic inference.
 */

export type LLMObsAnthropicEffort =
  | typeof LOW
  | typeof MEDIUM
  | typeof HIGH
  | typeof MAX
  | UnparsedObject;
export const LOW = "low";
export const MEDIUM = "medium";
export const HIGH = "high";
export const MAX = "max";
