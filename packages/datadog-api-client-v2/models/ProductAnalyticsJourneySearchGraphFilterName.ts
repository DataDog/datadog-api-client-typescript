/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The journey-level metric the graph filter applies to.
 */

export type ProductAnalyticsJourneySearchGraphFilterName =
  | typeof TIME_TO_CONVERT
  | typeof SESSION
  | typeof DROPOFF_RATE
  | UnparsedObject;
export const TIME_TO_CONVERT = "__dd.time_to_convert";
export const SESSION = "__dd.session";
export const DROPOFF_RATE = "__dd.dropoff_rate";
