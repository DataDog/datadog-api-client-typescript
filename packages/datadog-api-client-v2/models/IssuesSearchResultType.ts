/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of the object.
 */

export type IssuesSearchResultType =
  | typeof ERROR_TRACKING_SEARCH_RESULT
  | UnparsedObject;
export const ERROR_TRACKING_SEARCH_RESULT = "error_tracking_search_result";
