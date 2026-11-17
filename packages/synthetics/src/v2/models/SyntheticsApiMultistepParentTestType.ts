import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of the parent test resource.
 */
export type SyntheticsApiMultistepParentTestType =
  | typeof PARENT_TEST
  | UnparsedObject;
export const PARENT_TEST = "parent_test";
