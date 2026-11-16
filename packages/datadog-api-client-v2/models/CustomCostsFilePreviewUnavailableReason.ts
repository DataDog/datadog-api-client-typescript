/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Reason the content of the Custom Costs file is not returned. Only set when `content` is omitted.
 */

export type CustomCostsFilePreviewUnavailableReason =
  | typeof CHARGE_PERIOD_OUTSIDE_RETENTION_WINDOW
  | UnparsedObject;
export const CHARGE_PERIOD_OUTSIDE_RETENTION_WINDOW =
  "CHARGE_PERIOD_OUTSIDE_RETENTION_WINDOW";
