/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the budget limit applies. `shared` is one limit for all matching traffic. `per_instance` is one
 * limit for each counter of a template budget that splits by value.
 */

export type AiGatewayBudgetLimitMode =
  | typeof SHARED
  | typeof PER_INSTANCE
  | UnparsedObject;
export const SHARED = "shared";
export const PER_INSTANCE = "per_instance";
