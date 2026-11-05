import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Proposed operation for preview. Write endpoints infer it from the HTTP method.
 */
export type AiGatewayCaptureUpdateRequestDataAttributesOperation =
  | typeof CREATE
  | typeof REPLACE
  | typeof DELETE
  | UnparsedObject;
export const CREATE = "create";
export const REPLACE = "replace";
export const DELETE = "delete";
