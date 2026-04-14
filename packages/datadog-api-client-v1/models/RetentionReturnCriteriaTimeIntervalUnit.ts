/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Unit of time for retention return criteria interval.
 */

export type RetentionReturnCriteriaTimeIntervalUnit =
  | typeof DAY
  | typeof WEEK
  | typeof MONTH
  | UnparsedObject;
export const DAY = "day";
export const WEEK = "week";
export const MONTH = "month";
