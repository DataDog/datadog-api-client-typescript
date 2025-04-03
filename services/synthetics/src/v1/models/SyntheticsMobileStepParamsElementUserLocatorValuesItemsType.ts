import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a user locator.
 */
export type SyntheticsMobileStepParamsElementUserLocatorValuesItemsType =
  | typeof ACCESSIBILITY_ID
  | typeof ID
  | typeof IOS_PREDICATE_STRING
  | typeof IOS_CLASS_CHAIN
  | typeof XPATH
  | UnparsedObject;
export const ACCESSIBILITY_ID = "accessibility-id";
export const ID = "id";
export const IOS_PREDICATE_STRING = "ios-predicate-string";
export const IOS_CLASS_CHAIN = "ios-class-chain";
export const XPATH = "xpath";
