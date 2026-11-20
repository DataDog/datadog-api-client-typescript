/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type CaseMetric =
  | typeof TIME_TO_CLOSE
  | typeof TIME_TO_ASSIGN
  | typeof EVENT_COUNT
  | UnparsedObject;
export const TIME_TO_CLOSE = "time_to_close";
export const TIME_TO_ASSIGN = "time_to_assign";
export const EVENT_COUNT = "event_count";
