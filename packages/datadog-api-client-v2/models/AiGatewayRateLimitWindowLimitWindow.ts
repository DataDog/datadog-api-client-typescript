/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The rolling window that a limit applies to. For per-minute limits, use the `*_per_minute` fields instead.
 */

export type AiGatewayRateLimitWindowLimitWindow =
  | typeof FIVE_MINUTES
  | typeof FIFTEEN_MINUTES
  | typeof THIRTY_MINUTES
  | typeof ONE_HOUR
  | typeof THREE_HOURS
  | typeof SIX_HOURS
  | typeof TWELVE_HOURS
  | typeof TWENTY_FOUR_HOURS
  | UnparsedObject;
export const FIVE_MINUTES = "5m";
export const FIFTEEN_MINUTES = "15m";
export const THIRTY_MINUTES = "30m";
export const ONE_HOUR = "1h";
export const THREE_HOURS = "3h";
export const SIX_HOURS = "6h";
export const TWELVE_HOURS = "12h";
export const TWENTY_FOUR_HOURS = "24h";
