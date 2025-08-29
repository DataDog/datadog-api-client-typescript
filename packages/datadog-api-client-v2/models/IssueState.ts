/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * State of the issue
 */

export type IssueState =
  | typeof OPEN
  | typeof ACKNOWLEDGED
  | typeof RESOLVED
  | typeof IGNORED
  | typeof EXCLUDED
  | UnparsedObject;
export const OPEN = "OPEN";
export const ACKNOWLEDGED = "ACKNOWLEDGED";
export const RESOLVED = "RESOLVED";
export const IGNORED = "IGNORED";
export const EXCLUDED = "EXCLUDED";
