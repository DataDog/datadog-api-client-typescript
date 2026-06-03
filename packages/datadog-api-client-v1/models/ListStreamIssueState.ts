/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Issue state filter for the `issue_stream` data source.
 */

export type ListStreamIssueState =
  | typeof OPEN
  | typeof IGNORED
  | typeof ACKNOWLEDGED
  | typeof RESOLVED
  | UnparsedObject;
export const OPEN = "OPEN";
export const IGNORED = "IGNORED";
export const ACKNOWLEDGED = "ACKNOWLEDGED";
export const RESOLVED = "RESOLVED";
