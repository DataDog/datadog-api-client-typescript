/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Known provider implementation.
 */

export type AiGatewayKnownProvider =
  | typeof CUSTOM
  | typeof ANTHROPIC
  | typeof OPENAI
  | typeof AZURE_OPENAI
  | typeof BEDROCK
  | typeof GEMINI
  | typeof BASETEN
  | typeof FIREWORKS
  | typeof TOGETHER
  | typeof TYPESAFE
  | typeof AZURE_FOUNDRY
  | UnparsedObject;
export const CUSTOM = "custom";
export const ANTHROPIC = "anthropic";
export const OPENAI = "openai";
export const AZURE_OPENAI = "azure_openai";
export const BEDROCK = "bedrock";
export const GEMINI = "gemini";
export const BASETEN = "baseten";
export const FIREWORKS = "fireworks";
export const TOGETHER = "together";
export const TYPESAFE = "typesafe";
export const AZURE_FOUNDRY = "azure_foundry";
