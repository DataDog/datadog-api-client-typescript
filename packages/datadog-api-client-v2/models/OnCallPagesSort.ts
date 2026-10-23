/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sorting options for pages. Prefix a field with `-` to sort in descending order.
 */

export type OnCallPagesSort =
  | typeof CREATED_AT_ASCENDING
  | typeof CREATED_AT_DESCENDING
  | typeof MODIFIED_AT_ASCENDING
  | typeof MODIFIED_AT_DESCENDING
  | typeof STATUS_ASCENDING
  | typeof STATUS_DESCENDING
  | typeof PRIORITY_ASCENDING
  | typeof PRIORITY_DESCENDING
  | UnparsedObject;
export const CREATED_AT_ASCENDING = "created_at";
export const CREATED_AT_DESCENDING = "-created_at";
export const MODIFIED_AT_ASCENDING = "modified_at";
export const MODIFIED_AT_DESCENDING = "-modified_at";
export const STATUS_ASCENDING = "status";
export const STATUS_DESCENDING = "-status";
export const PRIORITY_ASCENDING = "priority";
export const PRIORITY_DESCENDING = "-priority";
