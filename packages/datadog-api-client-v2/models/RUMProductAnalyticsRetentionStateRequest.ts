/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Retention policy to set for Product Analytics data derived from RUM events. `PREVIEW` is the initial state of a new application and is reported as `NONE` in responses. Setting `MAX` requires the `product_analytics_apps_write` permission.
 */

export type RUMProductAnalyticsRetentionStateRequest =
  | typeof MAX
  | typeof NONE
  | typeof PREVIEW
  | UnparsedObject;
export const MAX = "MAX";
export const NONE = "NONE";
export const PREVIEW = "PREVIEW";
