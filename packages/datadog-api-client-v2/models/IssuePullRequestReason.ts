/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Why the pull request is linked to the issue. `fix` means the pull request fixes the issue, and `trigger` means the pull request introduced the issue.
 */

export type IssuePullRequestReason =
  | typeof UNKNOWN
  | typeof FIX
  | typeof TRIGGER
  | UnparsedObject;
export const UNKNOWN = "unknown";
export const FIX = "fix";
export const TRIGGER = "trigger";
