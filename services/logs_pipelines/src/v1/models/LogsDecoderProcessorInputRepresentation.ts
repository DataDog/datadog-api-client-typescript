import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The original representation of input string.
 */
export type LogsDecoderProcessorInputRepresentation =
  | typeof UTF_8
  | typeof INTEGER
  | UnparsedObject;
export const UTF_8 = "utf_8";
export const INTEGER = "integer";
