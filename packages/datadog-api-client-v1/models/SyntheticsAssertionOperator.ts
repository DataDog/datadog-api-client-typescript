/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Assertion operator to apply.
 */

export type SyntheticsAssertionOperator =
  | typeof CONTAINS
  | typeof DOES_NOT_CONTAIN
  | typeof IS
  | typeof IS_NOT
  | typeof LESS_THAN
  | typeof LESS_THAN_OR_EQUAL
  | typeof MORE_THAN
  | typeof MORE_THAN_OR_EQUAL
  | typeof MATCHES
  | typeof DOES_NOT_MATCH
  | typeof VALIDATES
  | typeof IS_IN_MORE_DAYS_THAN
  | typeof IS_IN_LESS_DAYS_THAN
  | typeof DOES_NOT_EXIST
  | typeof IS_UNDEFINED
  | UnparsedObject;
export const CONTAINS = "contains";
export const DOES_NOT_CONTAIN = "doesNotContain";
export const IS = "is";
export const IS_NOT = "isNot";
export const LESS_THAN = "lessThan";
export const LESS_THAN_OR_EQUAL = "lessThanOrEqual";
export const MORE_THAN = "moreThan";
export const MORE_THAN_OR_EQUAL = "moreThanOrEqual";
export const MATCHES = "matches";
export const DOES_NOT_MATCH = "doesNotMatch";
export const VALIDATES = "validates";
export const IS_IN_MORE_DAYS_THAN = "isInMoreThan";
export const IS_IN_LESS_DAYS_THAN = "isInLessThan";
export const DOES_NOT_EXIST = "doesNotExist";
export const IS_UNDEFINED = "isUndefined";
