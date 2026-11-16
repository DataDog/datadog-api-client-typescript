/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How a `data-jobs alert` job duration monitor detects a breach. Must match the
 * `.detection()` call in the monitor query. Required for job duration monitors.
 */

export type MonitorFormulaAndFunctionDataQualityDetectionType =
  | typeof STATIC
  | typeof ANOMALY
  | UnparsedObject;
export const STATIC = "static";
export const ANOMALY = "anomaly";
