import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The programming language for the transformation.
 */
export type DataTransformationLanguage =
  | typeof JAVASCRIPT
  | typeof PYTHON
  | UnparsedObject;
export const JAVASCRIPT = "javascript";
export const PYTHON = "python";
