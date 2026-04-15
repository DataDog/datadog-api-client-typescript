/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Data source for Product Analytics Extended queries.
 */

export type FormulaAndFunctionProductAnalyticsExtendedDataSource =
  | typeof PRODUCT_ANALYTICS_EXTENDED
  | UnparsedObject;
export const PRODUCT_ANALYTICS_EXTENDED = "product_analytics_extended";
