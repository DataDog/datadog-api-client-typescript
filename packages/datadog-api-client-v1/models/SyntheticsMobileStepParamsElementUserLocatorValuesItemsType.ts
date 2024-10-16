/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The definition of `SyntheticsMobileStepParamsElementUserLocatorValuesItemsType` object.
 */

export type SyntheticsMobileStepParamsElementUserLocatorValuesItemsType =
  | typeof ACCESSIBILITYNOT_ID
  | typeof ID
  | typeof IOSNOT_PREDICATENOT_STRING
  | typeof IOSNOT_CLASSNOT_CHAIN
  | typeof XPATH
  | UnparsedObject;
export const ACCESSIBILITYNOT_ID = "accessibility-id";
export const ID = "id";
export const IOSNOT_PREDICATENOT_STRING = "ios-predicate-string";
export const IOSNOT_CLASSNOT_CHAIN = "ios-class-chain";
export const XPATH = "xpath";
