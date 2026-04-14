/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Display mode for grouped funnel results.
 */

export type FunnelGroupedDisplay =
  | typeof STACKED
  | typeof SIDE_BY_SIDE
  | UnparsedObject;
export const STACKED = "stacked";
export const SIDE_BY_SIDE = "side_by_side";
