/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Product Analytics monitor unlink request resource type.
 */

export type ProductAnalyticsMonitorUnlinkRequestType =
  | typeof PA_MONITOR_UNLINK_REQUEST
  | UnparsedObject;
export const PA_MONITOR_UNLINK_REQUEST = "pa_monitor_unlink_request";
