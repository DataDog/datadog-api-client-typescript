/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The metric's type.
 */

export type MetricTagConfigurationMetricTypes =
  | typeof GAUGE
  | typeof COUNT
  | typeof RATE
  | typeof DISTRIBUTION
  | UnparsedObject;
export const GAUGE = "gauge";
export const COUNT = "count";
export const RATE = "rate";
export const DISTRIBUTION = "distribution";
