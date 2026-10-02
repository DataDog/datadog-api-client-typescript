/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Metric SQL models resource type.
 */

export type ExperimentsUpdateMetricSQLModelV2RequestDataType =
  | typeof METRIC_SQL_MODELS
  | UnparsedObject;
export const METRIC_SQL_MODELS = "metric-sql-models";
