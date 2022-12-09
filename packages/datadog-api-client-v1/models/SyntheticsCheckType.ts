/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of assertion to apply in an API test.
 */

export type SyntheticsCheckType =
  | typeof EQUALS
  | typeof NOT_EQUALS
  | typeof CONTAINS
  | typeof NOT_CONTAINS
  | typeof STARTS_WITH
  | typeof NOT_STARTS_WITH
  | typeof GREATER
  | typeof LOWER
  | typeof GREATER_EQUALS
  | typeof LOWER_EQUALS
  | typeof MATCH_REGEX
  | typeof BETWEEN
  | typeof IS_EMPTY
  | typeof NOT_IS_EMPTY
  | UnparsedObject;
export const EQUALS = "equals";
export const NOT_EQUALS = "notEquals";
export const CONTAINS = "contains";
export const NOT_CONTAINS = "notContains";
export const STARTS_WITH = "startsWith";
export const NOT_STARTS_WITH = "notStartsWith";
export const GREATER = "greater";
export const LOWER = "lower";
export const GREATER_EQUALS = "greaterEquals";
export const LOWER_EQUALS = "lowerEquals";
export const MATCH_REGEX = "matchRegex";
export const BETWEEN = "between";
export const IS_EMPTY = "isEmpty";
export const NOT_IS_EMPTY = "notIsEmpty";
