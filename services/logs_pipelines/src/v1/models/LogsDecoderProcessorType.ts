import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs decoder processor.
 */
export type LogsDecoderProcessorType =
  | typeof DECODER_PROCESSOR
  | UnparsedObject;
export const DECODER_PROCESSOR = "decoder-processor";
