/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Comma-separated list of additional data to include in the response. Allowed values are `metric_volumes`.
 */

export type MetricVolumesInclude =
  | typeof METRIC_VOLUMES
  | typeof GENERATED_METRIC_ATTRIBUTES
  | UnparsedObject;
export const METRIC_VOLUMES = "metric_volumes";
export const GENERATED_METRIC_ATTRIBUTES = "generated_metric_attributes";
