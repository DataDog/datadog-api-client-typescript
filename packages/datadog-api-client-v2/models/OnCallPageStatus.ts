/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The current status of the On-Call Page.
 */

export type OnCallPageStatus =
  | typeof TRIGGERED
  | typeof ACKNOWLEDGED
  | typeof RESOLVED
  | UnparsedObject;
export const TRIGGERED = "triggered";
export const ACKNOWLEDGED = "acknowledged";
export const RESOLVED = "resolved";
