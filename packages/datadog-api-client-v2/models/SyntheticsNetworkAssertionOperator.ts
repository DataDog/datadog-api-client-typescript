/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Assertion operator to apply.
 */

export type SyntheticsNetworkAssertionOperator =
  | typeof IS
  | typeof IS_NOT
  | typeof LESS_THAN
  | typeof LESS_THAN_OR_EQUAL
  | typeof MORE_THAN
  | typeof MORE_THAN_OR_EQUAL
  | UnparsedObject;
export const IS = "is";
export const IS_NOT = "isNot";
export const LESS_THAN = "lessThan";
export const LESS_THAN_OR_EQUAL = "lessThanOrEqual";
export const MORE_THAN = "moreThan";
export const MORE_THAN_OR_EQUAL = "moreThanOrEqual";
