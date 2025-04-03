import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of the context that the element is in.
 */
export type SyntheticsMobileStepParamsElementContextType =
  | typeof NATIVE
  | typeof WEB
  | UnparsedObject;
export const NATIVE = "native";
export const WEB = "web";
