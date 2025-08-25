/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Define whether you want to start (`live`) or pause (`paused`) a
 * Synthetic test.
 */

export type SyntheticsTestPauseStatus =
  | typeof LIVE
  | typeof PAUSED
  | UnparsedObject;
export const LIVE = "live";
export const PAUSED = "paused";
