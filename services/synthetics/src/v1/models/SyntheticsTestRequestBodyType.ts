import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the request body.
 */
export type SyntheticsTestRequestBodyType =
  | typeof TEXT_PLAIN
  | typeof APPLICATION_JSON
  | typeof TEXT_XML
  | typeof TEXT_HTML
  | typeof APPLICATION_X_WWW_FORM_URLENCODED
  | typeof GRAPHQL
  | typeof APPLICATION_OCTET_STREAM
  | typeof MULTIPART_FORM_DATA
  | UnparsedObject;
export const TEXT_PLAIN = "text/plain";
export const APPLICATION_JSON = "application/json";
export const TEXT_XML = "text/xml";
export const TEXT_HTML = "text/html";
export const APPLICATION_X_WWW_FORM_URLENCODED =
  "application/x-www-form-urlencoded";
export const GRAPHQL = "graphql";
export const APPLICATION_OCTET_STREAM = "application/octet-stream";
export const MULTIPART_FORM_DATA = "multipart/form-data";
