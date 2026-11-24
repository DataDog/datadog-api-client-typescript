/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Operation supported by an AI Gateway model.
 */

export type AiGatewaySupportedOperation =
  | typeof ANTHROPIC_MESSAGES
  | typeof ANTHROPIC_COUNT_TOKENS
  | typeof OPENAI_CHAT_COMPLETIONS
  | typeof OPENAI_RESPONSES
  | typeof OPENAI_WEB_SEARCH
  | typeof OPENAI_EMBEDDINGS
  | typeof OPENAI_DECISIONS
  | typeof SYSTEM_ONE
  | typeof GEMINI_GENERATE_CONTENT
  | typeof GEMINI_RAW_PREDICTIONS
  | UnparsedObject;
export const ANTHROPIC_MESSAGES = "ANTHROPIC_MESSAGES";
export const ANTHROPIC_COUNT_TOKENS = "ANTHROPIC_COUNT_TOKENS";
export const OPENAI_CHAT_COMPLETIONS = "OPENAI_CHAT_COMPLETIONS";
export const OPENAI_RESPONSES = "OPENAI_RESPONSES";
export const OPENAI_WEB_SEARCH = "OPENAI_WEB_SEARCH";
export const OPENAI_EMBEDDINGS = "OPENAI_EMBEDDINGS";
export const OPENAI_DECISIONS = "OPENAI_DECISIONS";
export const SYSTEM_ONE = "SYSTEM_ONE";
export const GEMINI_GENERATE_CONTENT = "GEMINI_GENERATE_CONTENT";
export const GEMINI_RAW_PREDICTIONS = "GEMINI_RAW_PREDICTIONS";
