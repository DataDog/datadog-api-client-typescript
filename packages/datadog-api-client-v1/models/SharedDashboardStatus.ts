/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Active means the dashboard is publicly available. Paused means the dashboard is not publicly available.
 */

export type SharedDashboardStatus =
  | typeof ACTIVE
  | typeof PAUSED
  | UnparsedObject;
export const ACTIVE = "active";
export const PAUSED = "paused";
