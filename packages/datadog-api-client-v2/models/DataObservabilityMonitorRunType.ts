/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The JSON:API resource type for a data observability monitor run.
 */

export type DataObservabilityMonitorRunType =
  | typeof MONITOR_RUN
  | UnparsedObject;
export const MONITOR_RUN = "monitor_run";
