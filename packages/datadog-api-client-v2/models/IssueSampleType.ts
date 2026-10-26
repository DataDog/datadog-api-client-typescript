/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the object.
 */

export type IssueSampleType =
  | typeof ERROR_TRACKING_ISSUE_SAMPLE
  | UnparsedObject;
export const ERROR_TRACKING_ISSUE_SAMPLE = "error_tracking_issue_sample";
