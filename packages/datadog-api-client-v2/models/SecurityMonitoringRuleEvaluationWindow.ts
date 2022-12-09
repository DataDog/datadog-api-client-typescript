/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A time window is specified to match when at least one of the cases matches true. This is a sliding window
 * and evaluates in real time.
 */

export type SecurityMonitoringRuleEvaluationWindow =
  | typeof ZERO_MINUTES
  | typeof ONE_MINUTE
  | typeof FIVE_MINUTES
  | typeof TEN_MINUTES
  | typeof FIFTEEN_MINUTES
  | typeof THIRTY_MINUTES
  | typeof ONE_HOUR
  | typeof TWO_HOURS
  | UnparsedObject;
export const ZERO_MINUTES = 0;
export const ONE_MINUTE = 60;
export const FIVE_MINUTES = 300;
export const TEN_MINUTES = 600;
export const FIFTEEN_MINUTES = 900;
export const THIRTY_MINUTES = 1800;
export const ONE_HOUR = 3600;
export const TWO_HOURS = 7200;
