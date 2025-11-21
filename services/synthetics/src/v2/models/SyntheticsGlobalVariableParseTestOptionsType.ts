import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of value to extract from a test for a Synthetic global variable.
 */
export type SyntheticsGlobalVariableParseTestOptionsType =
  | typeof HTTP_BODY
  | typeof HTTP_HEADER
  | typeof HTTP_STATUS_CODE
  | typeof LOCAL_VARIABLE
  | UnparsedObject;
export const HTTP_BODY = "http_body";
export const HTTP_HEADER = "http_header";
export const HTTP_STATUS_CODE = "http_status_code";
export const LOCAL_VARIABLE = "local_variable";
