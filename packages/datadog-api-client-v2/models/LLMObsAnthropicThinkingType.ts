/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The thinking mode for Anthropic extended thinking.
 */

export type LLMObsAnthropicThinkingType =
  | typeof ENABLED
  | typeof DISABLED
  | typeof ADAPTIVE
  | UnparsedObject;
export const ENABLED = "enabled";
export const DISABLED = "disabled";
export const ADAPTIVE = "adaptive";
