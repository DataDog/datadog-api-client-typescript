/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The data source identifier for occurrence queries.
 */

export type ProductAnalyticsOccurrenceQueryDataSource =
  | typeof PRODUCT_ANALYTICS_OCCURRENCE
  | UnparsedObject;
export const PRODUCT_ANALYTICS_OCCURRENCE = "product_analytics_occurrence";
