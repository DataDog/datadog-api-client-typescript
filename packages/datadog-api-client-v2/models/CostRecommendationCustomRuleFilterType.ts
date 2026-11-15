/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the filter compares the tag. `is`, `is_not`, `contains`, `does_not_contain`, `like` (glob), and `not_like`
 * compare the tag values with `values`. `all` matches resources that have the tag and `untagged` matches resources
 * that do not, so both ignore `values`.
 */

export type CostRecommendationCustomRuleFilterType =
  | typeof IS
  | typeof IS_NOT
  | typeof CONTAINS
  | typeof DOES_NOT_CONTAIN
  | typeof LIKE
  | typeof NOT_LIKE
  | typeof ALL
  | typeof UNTAGGED
  | UnparsedObject;
export const IS = "is";
export const IS_NOT = "is_not";
export const CONTAINS = "contains";
export const DOES_NOT_CONTAIN = "does_not_contain";
export const LIKE = "like";
export const NOT_LIKE = "not_like";
export const ALL = "all";
export const UNTAGGED = "untagged";
