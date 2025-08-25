/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Usage type that is being measured.
 */

export type HourlyUsageType =
  | typeof APP_SEC_HOST_COUNT
  | typeof OBSERVABILITY_PIPELINES_BYTES_PROCESSSED
  | typeof LAMBDA_TRACED_INVOCATIONS_COUNT
  | UnparsedObject;
export const APP_SEC_HOST_COUNT = "app_sec_host_count";
export const OBSERVABILITY_PIPELINES_BYTES_PROCESSSED =
  "observability_pipelines_bytes_processed";
export const LAMBDA_TRACED_INVOCATIONS_COUNT =
  "lambda_traced_invocations_count";
