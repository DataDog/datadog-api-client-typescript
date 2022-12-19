/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of your Synthetic monitor.
 * * `O` for not triggered
 * * `1` for triggered
 * * `2` for no data
 */

export type SyntheticsTestMonitorStatus =
  | typeof UNTRIGGERED
  | typeof TRIGGERED
  | typeof NO_DATA
  | UnparsedObject;
export const UNTRIGGERED = 0;
export const TRIGGERED = 1;
export const NO_DATA = 2;
