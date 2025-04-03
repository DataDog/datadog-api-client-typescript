import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Property of the Synthetic Test Response to extract into a local variable.
 */
export type SyntheticsLocalVariableParsingOptionsType =
  | typeof GRPC_MESSAGE
  | typeof GRPC_METADATA
  | typeof HTTP_BODY
  | typeof HTTP_HEADER
  | typeof HTTP_STATUS_CODE
  | UnparsedObject;
export const GRPC_MESSAGE = "grpc_message";
export const GRPC_METADATA = "grpc_metadata";
export const HTTP_BODY = "http_body";
export const HTTP_HEADER = "http_header";
export const HTTP_STATUS_CODE = "http_status_code";
