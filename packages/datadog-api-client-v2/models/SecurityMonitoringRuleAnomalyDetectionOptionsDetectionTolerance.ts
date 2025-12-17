/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An optional parameter that sets how permissive anomaly detection is.
 * Higher values require higher deviations before triggering a signal.
 */

export type SecurityMonitoringRuleAnomalyDetectionOptionsDetectionTolerance =
  | typeof ONE
  | typeof TWO
  | typeof THREE
  | typeof FOUR
  | typeof FIVE
  | UnparsedObject;
export const ONE = 1;
export const TWO = 2;
export const THREE = 3;
export const FOUR = 4;
export const FIVE = 5;
