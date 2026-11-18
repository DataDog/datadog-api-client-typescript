/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How often the digest is sent. `weekly` and `biweekly` use `weekly_execution_day` and `weekly_execution_time`;
 * `every_30` and `every_90` (days) use `interval_execution_date` and `interval_execution_time`.
 */

export type CostRecommendationNotificationRuleFrequency =
  | typeof WEEKLY
  | typeof BIWEEKLY
  | typeof EVERY_30
  | typeof EVERY_90
  | UnparsedObject;
export const WEEKLY = "weekly";
export const BIWEEKLY = "biweekly";
export const EVERY_30 = "every_30";
export const EVERY_90 = "every_90";
