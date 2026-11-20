/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type TimeSpan =
  | typeof ONE_M
  | typeof FIVE_M
  | typeof TEN_M
  | typeof FIFTEEN_M
  | typeof THIRTY_M
  | typeof ONE_H
  | typeof FOUR_H
  | typeof ONE_D
  | typeof TWO_D
  | typeof ONE_W
  | typeof ONE_MO
  | typeof THREE_MO
  | typeof SIX_MO
  | typeof ONE_Y
  | UnparsedObject;
export const ONE_M = "1m";
export const FIVE_M = "5m";
export const TEN_M = "10m";
export const FIFTEEN_M = "15m";
export const THIRTY_M = "30m";
export const ONE_H = "1h";
export const FOUR_H = "4h";
export const ONE_D = "1d";
export const TWO_D = "2d";
export const ONE_W = "1w";
export const ONE_MO = "1mo";
export const THREE_MO = "3mo";
export const SIX_MO = "6mo";
export const ONE_Y = "1y";
