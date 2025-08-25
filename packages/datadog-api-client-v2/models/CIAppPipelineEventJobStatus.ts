/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The final status of the job.
 */

export type CIAppPipelineEventJobStatus =
  | typeof SUCCESS
  | typeof ERROR
  | typeof CANCELED
  | typeof SKIPPED
  | UnparsedObject;
export const SUCCESS = "success";
export const ERROR = "error";
export const CANCELED = "canceled";
export const SKIPPED = "skipped";
