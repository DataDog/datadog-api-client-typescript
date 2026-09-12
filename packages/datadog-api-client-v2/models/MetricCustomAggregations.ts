/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MetricAvailableAggrFunctions } from "./MetricAvailableAggrFunctions";
import { MetricCustomAggregation } from "./MetricCustomAggregation";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Deprecated. You no longer need to configure specific time and space aggregations for Metrics Without Limits.
 */

export type MetricCustomAggregations =
  | Array<MetricCustomAggregation>
  | Array<MetricAvailableAggrFunctions>
  | UnparsedObject;
