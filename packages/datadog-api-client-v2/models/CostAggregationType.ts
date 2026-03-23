/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Controls how costs are aggregated when using `start_date`. The `cumulative` option returns month-to-date running totals.
 */

export type CostAggregationType = typeof CUMULATIVE | UnparsedObject;
export const CUMULATIVE = "cumulative";
