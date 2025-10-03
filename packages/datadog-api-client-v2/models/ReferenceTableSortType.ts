/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sort field and direction for reference tables. Use field name for ascending, prefix with "-" for descending.
 */

export type ReferenceTableSortType =
  | typeof UPDATED_AT
  | typeof TABLE_NAME
  | typeof STATUS
  | typeof MINUS_UPDATED_AT
  | typeof MINUS_TABLE_NAME
  | typeof MINUS_STATUS
  | UnparsedObject;
export const UPDATED_AT = "updated_at";
export const TABLE_NAME = "table_name";
export const STATUS = "status";
export const MINUS_UPDATED_AT = "-updated_at";
export const MINUS_TABLE_NAME = "-table_name";
export const MINUS_STATUS = "-status";
