/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The name of a supported LLM provider integration.
 */

export type LLMObsIntegrationName =
  | typeof OPENAI
  | typeof AMAZON_BEDROCK
  | typeof ANTHROPIC
  | typeof AZURE_OPENAI
  | typeof VERTEX_AI
  | typeof LLMPROXY
  | UnparsedObject;
export const OPENAI = "openai";
export const AMAZON_BEDROCK = "amazon_bedrock";
export const ANTHROPIC = "anthropic";
export const AZURE_OPENAI = "azure_openai";
export const VERTEX_AI = "vertex_ai";
export const LLMPROXY = "llmproxy";
