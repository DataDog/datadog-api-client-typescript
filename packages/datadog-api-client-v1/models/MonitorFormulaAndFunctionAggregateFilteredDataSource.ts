/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Data source for aggregate filtered queries.
 */

export type MonitorFormulaAndFunctionAggregateFilteredDataSource =
  | typeof AGGREGATE_FILTERED_QUERY
  | UnparsedObject;
export const AGGREGATE_FILTERED_QUERY = "aggregate_filtered_query";
