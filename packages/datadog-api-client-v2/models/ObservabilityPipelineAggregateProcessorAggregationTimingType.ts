/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Determines whether metrics are assigned to aggregation windows based on when they are processed or their timestamps.
 */

export type ObservabilityPipelineAggregateProcessorAggregationTimingType =
  | typeof SYSTEM_TIME
  | typeof EVENT_TIME
  | UnparsedObject;
export const SYSTEM_TIME = "system_time";
export const EVENT_TIME = "event_time";
