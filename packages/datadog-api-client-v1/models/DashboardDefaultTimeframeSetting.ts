/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardFixedTimeframe } from "./DashboardFixedTimeframe";
import { DashboardLiveTimeframe } from "./DashboardLiveTimeframe";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The default timeframe applied when opening the dashboard. Set to `null` to clear the dashboard's default timeframe.
 */

export type DashboardDefaultTimeframeSetting =
  | DashboardLiveTimeframe
  | DashboardFixedTimeframe
  | UnparsedObject;
