/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * UTC accounting period for a budget.
 */

export type AiGatewayBudgetWindowPolicy =
  | typeof DAILY
  | typeof WEEKLY
  | typeof MONTHLY
  | UnparsedObject;
export const DAILY = "DAILY";
export const WEEKLY = "WEEKLY";
export const MONTHLY = "MONTHLY";
