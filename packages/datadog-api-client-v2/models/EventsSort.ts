/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The sort order of events. `-timestamp` (the default) returns the newest events first, and `timestamp` returns
 * the oldest first. The client libraries reject any other value.
 */

export type EventsSort =
  | typeof TIMESTAMP_ASCENDING
  | typeof TIMESTAMP_DESCENDING
  | UnparsedObject;
export const TIMESTAMP_ASCENDING = "timestamp";
export const TIMESTAMP_DESCENDING = "-timestamp";
