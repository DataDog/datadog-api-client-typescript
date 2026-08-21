/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsRetentionCalendarTimeInterval } from "./ProductAnalyticsRetentionCalendarTimeInterval";
import { ProductAnalyticsRetentionFixedTimeInterval } from "./ProductAnalyticsRetentionFixedTimeInterval";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A retention interval, either aligned to calendar boundaries or of a fixed length.
 * Cohort criteria use calendar intervals; return criteria use fixed intervals.
 */

export type ProductAnalyticsRetentionTimeInterval =
  | ProductAnalyticsRetentionCalendarTimeInterval
  | ProductAnalyticsRetentionFixedTimeInterval
  | UnparsedObject;
