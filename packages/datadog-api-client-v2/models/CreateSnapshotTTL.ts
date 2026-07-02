/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The time-to-live for the snapshot. This value corresponds to storage lifecycle policies that automatically delete the snapshot after the specified period.
 */

export type CreateSnapshotTTL =
  | typeof THIRTY_DAYS
  | typeof SIXTY_DAYS
  | typeof NINETY_DAYS
  | typeof ONE_YEAR
  | typeof TWO_YEARS
  | typeof INFINITE
  | UnparsedObject;
export const THIRTY_DAYS = "30d";
export const SIXTY_DAYS = "60d";
export const NINETY_DAYS = "90d";
export const ONE_YEAR = "1y";
export const TWO_YEARS = "2y";
export const INFINITE = "inf";
