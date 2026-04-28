/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A day of the week for a Synthetics downtime recurrence.
 */

export type SyntheticsDowntimeWeekday =
  | typeof MONDAY
  | typeof TUESDAY
  | typeof WEDNESDAY
  | typeof THURSDAY
  | typeof FRIDAY
  | typeof SATURDAY
  | typeof SUNDAY
  | UnparsedObject;
export const MONDAY = "MO";
export const TUESDAY = "TU";
export const WEDNESDAY = "WE";
export const THURSDAY = "TH";
export const FRIDAY = "FR";
export const SATURDAY = "SA";
export const SUNDAY = "SU";
