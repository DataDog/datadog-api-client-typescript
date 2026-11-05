import { UnparsedObject } from "@datadog/datadog-api-client";

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
