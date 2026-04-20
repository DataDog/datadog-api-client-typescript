/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Name of the LLM integration provider.
 */

export type LLMObsCustomEvalConfigIntegrationProvider =
  | typeof OPENAI
  | typeof AMAZON_BEDROCK
  | typeof ANTHROPIC
  | typeof AZURE_OPENAI
  | typeof VERTEX_AI
  | typeof LLM_PROXY
  | UnparsedObject;
export const OPENAI = "openai";
export const AMAZON_BEDROCK = "amazon-bedrock";
export const ANTHROPIC = "anthropic";
export const AZURE_OPENAI = "azure-openai";
export const VERTEX_AI = "vertex-ai";
export const LLM_PROXY = "llm-proxy";
