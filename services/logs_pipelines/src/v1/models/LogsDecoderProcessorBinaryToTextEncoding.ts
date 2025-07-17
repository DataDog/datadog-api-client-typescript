import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The encoding used to represent the binary data.
 */
export type LogsDecoderProcessorBinaryToTextEncoding =
  | typeof BASE64
  | typeof BASE16
  | UnparsedObject;
export const BASE64 = "base64";
export const BASE16 = "base16";
