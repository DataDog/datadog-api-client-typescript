/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Audience dimension to group by, instead of an event facet.
 */

export type ProductAnalyticsGraphQueryGroupBySource =
  | typeof USERS
  | typeof ACCOUNTS
  | UnparsedObject;
export const USERS = "product_analytics_audience_filters.users";
export const ACCOUNTS = "product_analytics_audience_filters.accounts";
