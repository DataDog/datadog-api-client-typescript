/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The discriminator identifying a scope narrowed to one return period.
 */

export type ProductAnalyticsRetentionReturnPeriodScopeType =
  | typeof RETURN_PERIOD
  | UnparsedObject;
export const RETURN_PERIOD = "return_period";
