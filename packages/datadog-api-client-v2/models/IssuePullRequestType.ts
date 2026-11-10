/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the object.
 */

export type IssuePullRequestType =
  | typeof ERROR_TRACKING_PULL_REQUEST
  | UnparsedObject;
export const ERROR_TRACKING_PULL_REQUEST = "error_tracking_pull_request";
