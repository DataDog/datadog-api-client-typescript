/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * State that will trigger a monitor notification when the `notify_end_types` action occurs.
 */

export type DowntimeAttributeNotifyEndStateTypes =
  | typeof ALERT
  | typeof NO_DATA
  | typeof WARN
  | UnparsedObject;
export const ALERT = "alert";
export const NO_DATA = "no data";
export const WARN = "warn";
