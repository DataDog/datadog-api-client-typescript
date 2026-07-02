/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Version of the query for the logs transaction stream widget. When omitted, v1 query behavior is
 * preserved. Set to `sequential_query` to use v2 behavior. **This feature is in Preview.**
 */

export type ListStreamQueryVersion = typeof SEQUENTIAL_QUERY | UnparsedObject;
export const SEQUENTIAL_QUERY = "sequential_query";
