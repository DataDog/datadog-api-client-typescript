/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The direction the bandit optimizes the metric in. It's fixed when the bandit starts. Null before the first saved refresh.
 */

export type ExperimentsBanditDesiredChange =
  | typeof METRIC_INCREASES
  | typeof METRIC_DECREASES
  | UnparsedObject;
export const METRIC_INCREASES = "METRIC_INCREASES";
export const METRIC_DECREASES = "METRIC_DECREASES";
