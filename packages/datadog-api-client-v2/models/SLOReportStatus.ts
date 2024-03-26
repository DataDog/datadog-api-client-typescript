/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the SLO report job.
 */

export type SLOReportStatus =
  | typeof IN_PROGRESS
  | typeof COMPLETED
  | typeof COMPLETED_WITH_ERRORS
  | typeof FAILED
  | typeof UNKNOWN
  | UnparsedObject;
export const IN_PROGRESS = "IN_PROGRESS";
export const COMPLETED = "COMPLETED";
export const COMPLETED_WITH_ERRORS = "COMPLETED_WITH_ERRORS";
export const FAILED = "FAILED";
export const UNKNOWN = "UNKNOWN";
