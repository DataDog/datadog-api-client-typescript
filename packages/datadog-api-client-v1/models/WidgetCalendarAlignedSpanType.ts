/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Calendar-aligned time span type.
 */

export type WidgetCalendarAlignedSpanType =
  | typeof DAILY
  | typeof WEEKLY
  | typeof MONTHLY
  | typeof YEARLY
  | UnparsedObject;
export const DAILY = "daily";
export const WEEKLY = "weekly";
export const MONTHLY = "monthly";
export const YEARLY = "yearly";
