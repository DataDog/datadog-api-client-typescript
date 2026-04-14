/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the value to compare against. Only used with the equals and !equals operator.
 */

export type ApplicationSecurityWafCustomRuleConditionParametersType =
  | typeof BOOLEAN
  | typeof SIGNED
  | typeof UNSIGNED
  | typeof FLOAT
  | typeof STRING
  | UnparsedObject;
export const BOOLEAN = "boolean";
export const SIGNED = "signed";
export const UNSIGNED = "unsigned";
export const FLOAT = "float";
export const STRING = "string";
