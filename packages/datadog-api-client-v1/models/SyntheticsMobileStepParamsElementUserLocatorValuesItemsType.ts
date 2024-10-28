/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
