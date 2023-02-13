/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A data source that is powered by the Metrics platform.
 */

export type MetricsDataSource =
  | typeof METRICS
  | typeof CLOUD_COST
  | UnparsedObject;
export const METRICS = "metrics";
export const CLOUD_COST = "cloud_cost";
