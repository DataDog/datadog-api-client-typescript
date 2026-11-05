/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Primary model kind. Decision models return a choice or score instead of generated text.
 */

export type AiGatewayModelMetadataKind =
  | typeof LANGUAGE
  | typeof EMBEDDING
  | typeof IMAGE
  | typeof AUDIO
  | typeof DECISION
  | typeof RERANKING
  | UnparsedObject;
export const LANGUAGE = "language";
export const EMBEDDING = "embedding";
export const IMAGE = "image";
export const AUDIO = "audio";
export const DECISION = "decision";
export const RERANKING = "reranking";
