/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Action that will trigger a monitor notification if the downtime is in the `notify_end_types` state.
 */

export type DowntimeAttributeNotifyEndStateActions =
  | typeof CANCELED
  | typeof EXPIRED
  | UnparsedObject;
export const CANCELED = "canceled";
export const EXPIRED = "expired";
