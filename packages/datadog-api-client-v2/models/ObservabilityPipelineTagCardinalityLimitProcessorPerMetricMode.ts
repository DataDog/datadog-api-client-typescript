/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the per-metric override is applied. `tracked` enforces a custom limit; `excluded` skips the metric entirely.
 */

export type ObservabilityPipelineTagCardinalityLimitProcessorPerMetricMode =
  | typeof TRACKED
  | typeof EXCLUDED
  | UnparsedObject;
export const TRACKED = "tracked";
export const EXCLUDED = "excluded";
