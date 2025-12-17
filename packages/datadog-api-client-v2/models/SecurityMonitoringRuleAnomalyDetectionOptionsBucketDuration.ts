/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Duration in seconds of the time buckets used to aggregate events matched by the rule.
 * Must be greater than or equal to 300.
 */

export type SecurityMonitoringRuleAnomalyDetectionOptionsBucketDuration =
  | typeof FIVE_MINUTES
  | typeof TEN_MINUTES
  | typeof FIFTEEN_MINUTES
  | typeof THIRTY_MINUTES
  | typeof ONE_HOUR
  | typeof THREE_HOURS
  | UnparsedObject;
export const FIVE_MINUTES = 300;
export const TEN_MINUTES = 600;
export const FIFTEEN_MINUTES = 900;
export const THIRTY_MINUTES = 1800;
export const ONE_HOUR = 3600;
export const THREE_HOURS = 10800;
