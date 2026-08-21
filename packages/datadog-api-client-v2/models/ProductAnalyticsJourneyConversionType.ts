/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether to return the entities that converted at the target step, or those that dropped off.
 */

export type ProductAnalyticsJourneyConversionType =
  | typeof CONVERSION
  | typeof DROP_OFF
  | UnparsedObject;
export const CONVERSION = "conversion";
export const DROP_OFF = "drop-off";
