/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type identifier for batch queries of reference table rows.
 */

export type BatchRowsQueryDataType =
  | typeof REFERENCE_TABLES_BATCH_ROWS_QUERY
  | UnparsedObject;
export const REFERENCE_TABLES_BATCH_ROWS_QUERY =
  "reference-tables-batch-rows-query";
