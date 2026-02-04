/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Timestamp bucket indicating when logs were last collected
 */

export type SecurityMonitoringContentPackTimestampBucket =
  | typeof NOT_SEEN
  | typeof WITHIN_24_HOURS
  | typeof WITHIN_24_TO_72_HOURS
  | typeof OVER_72H_TO_30D
  | typeof OVER_30D
  | UnparsedObject;
export const NOT_SEEN = "not_seen";
export const WITHIN_24_HOURS = "within_24_hours";
export const WITHIN_24_TO_72_HOURS = "within_24_to_72_hours";
export const OVER_72H_TO_30D = "over_72h_to_30d";
export const OVER_30D = "over_30d";
