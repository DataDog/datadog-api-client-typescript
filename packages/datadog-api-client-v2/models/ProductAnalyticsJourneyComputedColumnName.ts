/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Name of a computed column to add to each row.
 */

export type ProductAnalyticsJourneyComputedColumnName =
  | typeof FIRST_CONVERSION_TIMESTAMPS
  | UnparsedObject;
export const FIRST_CONVERSION_TIMESTAMPS = "first_conversion_timestamps";
