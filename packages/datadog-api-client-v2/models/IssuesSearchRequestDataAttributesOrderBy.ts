/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The attribute to sort the search results by.
 */

export type IssuesSearchRequestDataAttributesOrderBy =
  | typeof TOTAL_COUNT
  | typeof FIRST_SEEN
  | typeof IMPACTED_SESSIONS
  | typeof PRIORITY
  | UnparsedObject;
export const TOTAL_COUNT = "TOTAL_COUNT";
export const FIRST_SEEN = "FIRST_SEEN";
export const IMPACTED_SESSIONS = "IMPACTED_SESSIONS";
export const PRIORITY = "PRIORITY";
