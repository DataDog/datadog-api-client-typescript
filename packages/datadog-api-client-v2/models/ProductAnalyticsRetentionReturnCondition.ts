/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * When an entity counts as having returned. Use `conversion_on` to count only entities that
 * returned during the period itself, or `conversion_on_or_after` to also count later returns.
 */

export type ProductAnalyticsRetentionReturnCondition =
  | typeof CONVERSION_ON
  | typeof CONVERSION_ON_OR_AFTER
  | UnparsedObject;
export const CONVERSION_ON = "conversion_on";
export const CONVERSION_ON_OR_AFTER = "conversion_on_or_after";
