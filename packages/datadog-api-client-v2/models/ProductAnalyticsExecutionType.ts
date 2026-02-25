/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Override the query execution strategy.
 */

export type ProductAnalyticsExecutionType =
  | typeof SIMPLE
  | typeof BACKGROUND
  | typeof TRINO_MULTISTEP
  | typeof MATERIALIZED_VIEW
  | UnparsedObject;
export const SIMPLE = "simple";
export const BACKGROUND = "background";
export const TRINO_MULTISTEP = "trino-multistep";
export const MATERIALIZED_VIEW = "materialized-view";
