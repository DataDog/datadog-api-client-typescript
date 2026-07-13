/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sensitivity level for anomaly detection. Use `never_detect` to disable anomaly detection.
 */

export type TimeseriesWidgetAnomalyDetectionSensitivity =
  | typeof NEVER_DETECT
  | UnparsedObject;
export const NEVER_DETECT = "never_detect";
