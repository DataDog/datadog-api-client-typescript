/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type DashboardInlineSchema46 =
  | typeof BURN_RATE
  | typeof ERROR_BUDGET_BURNDOWN
  | typeof ERROR_BUDGET_REMAINING
  | typeof SLO_STATUS
  | UnparsedObject;
export const BURN_RATE = "burn_rate";
export const ERROR_BUDGET_BURNDOWN = "error_budget_burndown";
export const ERROR_BUDGET_REMAINING = "error_budget_remaining";
export const SLO_STATUS = "slo_status";
