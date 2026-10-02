/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Experiment metric groups resource type.
 */

export type ExperimentsPatchExperimentMetricGroupV2RequestDataType =
  | typeof EXPERIMENT_METRIC_GROUPS
  | UnparsedObject;
export const EXPERIMENT_METRIC_GROUPS = "experiment-metric-groups";
