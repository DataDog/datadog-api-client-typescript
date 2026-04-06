/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The operator used in a targeting condition.
 */

export type ConditionOperator =
  | typeof LT
  | typeof LTE
  | typeof GT
  | typeof GTE
  | typeof MATCHES
  | typeof NOT_MATCHES
  | typeof ONE_OF
  | typeof NOT_ONE_OF
  | typeof IS_NULL
  | typeof EQUALS
  | UnparsedObject;
export const LT = "LT";
export const LTE = "LTE";
export const GT = "GT";
export const GTE = "GTE";
export const MATCHES = "MATCHES";
export const NOT_MATCHES = "NOT_MATCHES";
export const ONE_OF = "ONE_OF";
export const NOT_ONE_OF = "NOT_ONE_OF";
export const IS_NULL = "IS_NULL";
export const EQUALS = "EQUALS";
