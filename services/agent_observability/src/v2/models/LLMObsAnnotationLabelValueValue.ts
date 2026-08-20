import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The value for this label. Must comply with the label schema type constraints.
 */
export type LLMObsAnnotationLabelValueValue =
  | number
  | string
  | Array<string>
  | boolean
  | UnparsedObject;
