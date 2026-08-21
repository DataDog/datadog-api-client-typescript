/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for analytics list requests.
 */

export type ProductAnalyticsAnalyticsListRequestType =
  | typeof FORMULA_ANALYTICS_EXTENDED_LIST_REQUEST
  | UnparsedObject;
export const FORMULA_ANALYTICS_EXTENDED_LIST_REQUEST =
  "formula_analytics_extended_list_request";
