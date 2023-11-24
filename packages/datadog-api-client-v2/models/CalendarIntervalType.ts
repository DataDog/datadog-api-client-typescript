/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of calendar interval (day, week, etc.).
 */

export type CalendarIntervalType =
  | typeof day
  | typeof week
  | typeof month
  | typeof year
  | UnparsedObject;
export const day = "day";
export const week = "week";
export const month = "month";
export const year = "year";
