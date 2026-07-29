/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The historical metrics configuration resource type.
 */

export type HistoricalMetricsConfigurationType =
  | typeof HISTORICAL_METRICS_CONFIGURATIONS
  | UnparsedObject;
export const HISTORICAL_METRICS_CONFIGURATIONS =
  "historical_metrics_configurations";
