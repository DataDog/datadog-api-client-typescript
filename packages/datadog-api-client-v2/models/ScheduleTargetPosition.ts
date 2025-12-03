/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the position of a schedule target (example `previous`, `current`, or `next`).
 */

export type ScheduleTargetPosition =
  | typeof PREVIOUS
  | typeof CURRENT
  | typeof NEXT
  | UnparsedObject;
export const PREVIOUS = "previous";
export const CURRENT = "current";
export const NEXT = "next";
