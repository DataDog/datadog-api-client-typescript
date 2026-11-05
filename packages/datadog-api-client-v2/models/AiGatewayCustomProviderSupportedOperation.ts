/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Operation supported by a custom provider.
 */

export type AiGatewayCustomProviderSupportedOperation =
  | typeof OPENAI_CHAT_COMPLETIONS
  | typeof OPENAI_RESPONSES
  | typeof ANTHROPIC_MESSAGES
  | UnparsedObject;
export const OPENAI_CHAT_COMPLETIONS = "OPENAI_CHAT_COMPLETIONS";
export const OPENAI_RESPONSES = "OPENAI_RESPONSES";
export const ANTHROPIC_MESSAGES = "ANTHROPIC_MESSAGES";
