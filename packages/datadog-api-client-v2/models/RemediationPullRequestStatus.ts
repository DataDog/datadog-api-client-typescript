/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Pull request status for a linked code session.
 */

export type RemediationPullRequestStatus =
  | typeof OPEN
  | typeof CLOSED
  | typeof MERGED
  | UnparsedObject;
export const OPEN = "open";
export const CLOSED = "closed";
export const MERGED = "merged";
